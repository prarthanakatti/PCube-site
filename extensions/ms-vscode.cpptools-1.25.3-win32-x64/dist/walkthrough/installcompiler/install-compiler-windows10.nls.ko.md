<h1 data-loc-id="walkthrough.windows.install.compiler">Windows에 C++ 컴파일러 설치</h1>
<p data-loc-id="walkthrough.windows.text1">Windows용 C++ 개발 중인 경우 MSVC(Microsoft Visual C++) 컴파일러를 설치하는 것이 좋습니다.</p>
<ol>
<li><p data-loc-id="walkthrough.windows.text2">MSVC를 설치하려면 VS Code 터미널(CTRL + `)을 열고 다음 명령을 붙여 넣습니다.
</p><pre><code style="white-space: pre-wrap;">winget install Microsoft.VisualStudio.2022.BuildTools --force --override "--wait --passive --add Microsoft.VisualStudio.Workload.VCTools --add Microsoft.VisualStudio.Component.VC.Tools.x86.x64 --add Microsoft.VisualStudio.Component.Windows10SDK.20348"</code></pre>
</li>
<blockquote>
<p><strong data-loc-id="walkthrough.windows.note1">메모</strong>: <span data-loc-id="walkthrough.windows.note1.text">현재 C++ 코드베이스를 개발하는 데 적극적으로 사용 중인 유효한 Visual Studio 라이선스(Community, Pro 또는 Enterprise)가 있는 한 Visual Studio Build Tools의 C++ 도구 집합을 Visual Studio Code와 함께 사용하여 모든 C++ 코드베이스를 컴파일, 빌드 및 확인할 수 있습니다.</span></p>
</blockquote>

</ol>
<h2 data-loc-id="walkthrough.windows.verify.compiler">컴파일러 설치 확인 중</h2>
<ol>
<li><p data-loc-id="walkthrough.windows.open.command.prompt">Windows 시작 메뉴에 '<code>developer</code>'을(를) 입력하여 <strong>Developer Command Prompt for VS</strong>을(를) 엽니다.</p>
</li>
<li><p data-loc-id="walkthrough.windows.check.install"><span>Developer Command Prompt for VS</span>에 <code>cl</code>을(를) 입력하여 MSVC 설치를 확인하세요. 버전 및 기본 사용 설명과 함께 저작권 메시지가 표시될 것입니다.</p>
<blockquote>
<p><strong data-loc-id="walkthrough.windows.note2">메모</strong>: <span data-loc-id="walkthrough.windows.note2.text">명령줄 또는 VS Code에서 MSVC를 사용하려면 <strong>Developer Command Prompt for VS</strong>에서 실행해야 합니다. <span>PowerShell</span>, <span>Bash</span> 또는 Windows 명령 프롬프트와 같은 일반 셸에는 필요한 경로 환경 변수가 설정되어 있지 않습니다.</span></p>
</blockquote>
</li>
</ol>
<h2 data-loc-id="walkthrough.windows.other.compilers">기타 컴파일러 옵션</h2>
<p data-loc-id="walkthrough.windows.text3">Windows에서 Linux를 대상으로 하는 경우 <a href="https://code.visualstudio.com/docs/cpp/config-wsl" data-loc-id="walkthrough.windows.link.title1">VS Code에서 C++ 및 Linux용 Windows 하위 시스템(WSL) 사용</a>을(를) 확인하세요. 또는 <a href="https://code.visualstudio.com/docs/cpp/config-mingw" data-loc-id="walkthrough.windows.link.title2">MinGW로 Windows에 GCC 설치</a>할 수 있습니다.</p>