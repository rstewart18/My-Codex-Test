import subprocess
import os


def is_binary(path):
    try:
        with open(path, 'rb') as f:
            chunk = f.read(1024)
            return b'\0' in chunk
    except Exception:
        return True


def main():
    files = subprocess.check_output(['git', 'ls-files']).decode().splitlines()
    with open('annotation.txt', 'w', encoding='utf-8') as out:
        for file in files:
            if is_binary(file):
                continue
            out.write(f"===== {file} =====\n")
            try:
                blame = subprocess.check_output(['git', 'blame', file], text=True)
                out.write(blame)
            except subprocess.CalledProcessError as e:
                out.write(f"Error annotating {file}: {e}\n")
            out.write("\n")


if __name__ == '__main__':
    main()
