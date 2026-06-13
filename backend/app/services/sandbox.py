import os
import time
import shutil
import tempfile
import subprocess
from typing import Dict, Any

def execute_code(code: str, language: str, input_data: str) -> Dict[str, Any]:
    """
    Compiles and executes a user-submitted code string against input_data passed via stdin.
    Supports C++, Python, Java, and JavaScript with strict execution constraints:
    - Timeout: 2.0 seconds
    - Resource cleanup: robust deletion of temporary directories/files
    """
    lang = language.lower().strip()
    EXEC_TIMEOUT = 2.0
    COMPILE_TIMEOUT = 10.0
    temp_dir = None

    try:
        if lang in ("cpp", "c++"):
            # cpp: Write code to a temporary file, compile via g++ -O3, and run the compiled binary executable.
            temp_dir = tempfile.mkdtemp()
            source_path = os.path.join(temp_dir, "solution.cpp")
            exec_filename = "solution.exe" if os.name == "nt" else "solution"
            exec_path = os.path.join(temp_dir, exec_filename)

            with open(source_path, "w", encoding="utf-8") as f:
                f.write(code)

            # Compilation Step
            compile_cmd = ["g++", "-O3", source_path, "-o", exec_path]
            try:
                compile_res = subprocess.run(
                    compile_cmd,
                    capture_output=True,
                    text=True,
                    timeout=COMPILE_TIMEOUT,
                    cwd=temp_dir
                )
            except subprocess.TimeoutExpired:
                return {
                    "status": "Time Limit Exceeded (TLE)",
                    "execution_time_ms": int(EXEC_TIMEOUT * 1000),
                    "output": "",
                    "error": "Process terminated due to timeout constraint."
                }

            if compile_res.returncode != 0:
                return {
                    "status": "Compilation Error (CE)",
                    "execution_time_ms": 0,
                    "output": "",
                    "error": compile_res.stderr or compile_res.stdout
                }

            # Execution Step
            # On Windows, we should execute using the path to the executable.
            # On Unix, we need to run ./solution. Calling exec_path directly works on both.
            exec_cmd = [exec_path]
            start_time = time.perf_counter()
            try:
                run_res = subprocess.run(
                    exec_cmd,
                    input=input_data,
                    capture_output=True,
                    text=True,
                    timeout=EXEC_TIMEOUT,
                    cwd=temp_dir
                )
                duration_ms = int((time.perf_counter() - start_time) * 1000)
            except subprocess.TimeoutExpired:
                return {
                    "status": "Time Limit Exceeded (TLE)",
                    "execution_time_ms": int(EXEC_TIMEOUT * 1000),
                    "output": "",
                    "error": "Process terminated due to timeout constraint."
                }

            if run_res.returncode != 0:
                return {
                    "status": "Runtime Error (RE)",
                    "execution_time_ms": duration_ms,
                    "output": run_res.stdout,
                    "error": run_res.stderr
                }

            return {
                "status": "Success",
                "execution_time_ms": duration_ms,
                "output": run_res.stdout,
                "error": run_res.stderr
            }

        elif lang in ("python", "python3", "py"):
            # python: Directly execute the code string using the python3 runtime command.
            # Handle Windows store alias redirect by falling back to python
            py_exec = "python3"
            if os.name == "nt":
                try:
                    # check if python3 can execute version command
                    subprocess.run(["python3", "--version"], capture_output=True, timeout=1.0)
                except Exception:
                    py_exec = "python"

            exec_cmd = [py_exec, "-c", code]
            start_time = time.perf_counter()
            try:
                run_res = subprocess.run(
                    exec_cmd,
                    input=input_data,
                    capture_output=True,
                    text=True,
                    timeout=EXEC_TIMEOUT
                )
                duration_ms = int((time.perf_counter() - start_time) * 1000)
            except subprocess.TimeoutExpired:
                return {
                    "status": "Time Limit Exceeded (TLE)",
                    "execution_time_ms": int(EXEC_TIMEOUT * 1000),
                    "output": "",
                    "error": "Process terminated due to timeout constraint."
                }

            if run_res.returncode != 0:
                return {
                    "status": "Runtime Error (RE)",
                    "execution_time_ms": duration_ms,
                    "output": run_res.stdout,
                    "error": run_res.stderr
                }

            return {
                "status": "Success",
                "execution_time_ms": duration_ms,
                "output": run_res.stdout,
                "error": run_res.stderr
            }

        elif lang == "java":
            # java: To handle Java's strict file-naming structure, create a unique ephemeral sub-directory,
            # write the source explicitly into a file named Main.java, compile via javac Main.java,
            # and execute the resulting bytecode using java Main.
            temp_dir = tempfile.mkdtemp()
            source_path = os.path.join(temp_dir, "Main.java")

            with open(source_path, "w", encoding="utf-8") as f:
                f.write(code)

            # Compilation Step
            compile_cmd = ["javac", "Main.java"]
            try:
                compile_res = subprocess.run(
                    compile_cmd,
                    capture_output=True,
                    text=True,
                    timeout=COMPILE_TIMEOUT,
                    cwd=temp_dir
                )
            except subprocess.TimeoutExpired:
                return {
                    "status": "Time Limit Exceeded (TLE)",
                    "execution_time_ms": int(EXEC_TIMEOUT * 1000),
                    "output": "",
                    "error": "Process terminated due to timeout constraint."
                }

            if compile_res.returncode != 0:
                return {
                    "status": "Compilation Error (CE)",
                    "execution_time_ms": 0,
                    "output": "",
                    "error": compile_res.stderr or compile_res.stdout
                }

            # Execution Step
            exec_cmd = ["java", "Main"]
            start_time = time.perf_counter()
            try:
                run_res = subprocess.run(
                    exec_cmd,
                    input=input_data,
                    capture_output=True,
                    text=True,
                    timeout=EXEC_TIMEOUT,
                    cwd=temp_dir
                )
                duration_ms = int((time.perf_counter() - start_time) * 1000)
            except subprocess.TimeoutExpired:
                return {
                    "status": "Time Limit Exceeded (TLE)",
                    "execution_time_ms": int(EXEC_TIMEOUT * 1000),
                    "output": "",
                    "error": "Process terminated due to timeout constraint."
                }

            if run_res.returncode != 0:
                return {
                    "status": "Runtime Error (RE)",
                    "execution_time_ms": duration_ms,
                    "output": run_res.stdout,
                    "error": run_res.stderr
                }

            return {
                "status": "Success",
                "execution_time_ms": duration_ms,
                "output": run_res.stdout,
                "error": run_res.stderr
            }

        elif lang in ("javascript", "js", "node"):
            # javascript: Write the code string into a temporary .js file and run it using the node runtime command.
            temp_dir = tempfile.mkdtemp()
            source_path = os.path.join(temp_dir, "solution.js")

            with open(source_path, "w", encoding="utf-8") as f:
                f.write(code)

            exec_cmd = ["node", source_path]
            start_time = time.perf_counter()
            try:
                run_res = subprocess.run(
                    exec_cmd,
                    input=input_data,
                    capture_output=True,
                    text=True,
                    timeout=EXEC_TIMEOUT,
                    cwd=temp_dir
                )
                duration_ms = int((time.perf_counter() - start_time) * 1000)
            except subprocess.TimeoutExpired:
                return {
                    "status": "Time Limit Exceeded (TLE)",
                    "execution_time_ms": int(EXEC_TIMEOUT * 1000),
                    "output": "",
                    "error": "Process terminated due to timeout constraint."
                }

            if run_res.returncode != 0:
                return {
                    "status": "Runtime Error (RE)",
                    "execution_time_ms": duration_ms,
                    "output": run_res.stdout,
                    "error": run_res.stderr
                }

            return {
                "status": "Success",
                "execution_time_ms": duration_ms,
                "output": run_res.stdout,
                "error": run_res.stderr
            }

        else:
            return {
                "status": "Runtime Error (RE)",
                "execution_time_ms": 0,
                "output": "",
                "error": f"Unsupported language: {language}"
            }

    except Exception as e:
        return {
            "status": "Runtime Error (RE)",
            "execution_time_ms": 0,
            "output": "",
            "error": str(e)
        }

    finally:
        if temp_dir and os.path.exists(temp_dir):
            shutil.rmtree(temp_dir, ignore_errors=True)
