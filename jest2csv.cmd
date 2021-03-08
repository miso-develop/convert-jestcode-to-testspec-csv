:: Convert all .ts under the argument directory to csv (and convert UTF8 to SJIS at the same time)
@echo off

set TARGET_DIR=%1
if _%TARGET_DIR% equ _ set TARGET_DIR=tests

for /f %%A in ('dir /s/b %TARGET_DIR%\*.ts') do call :jest2csv %%A

pause
exit /b



:jest2csv
echo %1

if not exist .\export md .\export
set EXPORT=.\export\%~nx1.csv
set EXPORT_UTF8=.\export\%~nx1.csv.utf8
echo %EXPORT%

node dist %1 > %EXPORT_UTF8%
powershell -NoProfile -ExecutionPolicy Unrestricted -Command "& { get-content -Encoding UTF8 %EXPORT_UTF8% | Set-Content %EXPORT%}"
del %EXPORT_UTF8%

echo.
exit /b
