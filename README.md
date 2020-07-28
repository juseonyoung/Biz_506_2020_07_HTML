# UI  구현(화면구현) 프로젝트

## 2020-07-27

#### HTML(Hyper Text Markup language)
* tag를 사용하여 문서를 작성하는 문서작성용 언어
* Mark Down : git의 README.md와 같은 문서를 만들 때 tag가 아닌 특수문자(#,*)를 문서 첫번째 위치에
* 놓아서 문서를 꾸미고 모양을 만드는 문서작성용 언어
* Mark Up : 시작 tag<tag> 와 종료 tag</tag>를 이용하여 문서를 감싸서 문서를 꾸미고 모양을 만드는 문서작성용 언어

* Mark up : XML, HTML
* XML : tag에 사용되는 키워드를 임의로 만들 수 있다. 
* HTML : tag에 사용되는 키워드가 정해진 것을 사용한다. 

#### index.html
* 일반적으로 홈페이지 또는 웹페이지라고 부르는 Browser를 통해서 접근하는 프로젝트에서 제일 먼저 만나게 되는 파일이다.
* index page, Landing page, Parking page 등으로 부른다.
* 정확한 용어는 시작페이지라고 하는 것이 알맞음
* http://naver.com/ 라고 브라우저 주소창에 입력을 하면 Http://www.naver.com/index.html이라고 입력한 것과 같다.
* http://www.naver.com:80/index.html이 완전한 주소임
* 전세계적으로 http는 80번 포트를 쓰기로 약속되있어 80/index.html을 안써도 된다.


#### http: Hyper Text Transfer Protocol
* HTML(Hyper Text Markup Language)로 만든 문서파일 또는 정보를 인터넷을 통해 주고 받을 때 사용하는 보편적인 프로토콜
* 모든 내용을 평문(암호화 되지 않은)으로 주고 받는다. 
* 사용자에 Web Browser를 통해서 서버에 요청(request)을 수행하면 서버는 사용자의 요청을 분석하여 여러가지 처리를 수행한 후
  그 결과를 html 방식의 코드로 만들어서 응답(Response)하는 구조로 만들어진 프로토콜이다. 
* 인터넷 서비스 중에서 www(world wide web) 환경에서 사용되는 보편적인 프로토콜이다. 

#### https: Hyper Text Transfer Protocol Secure Socket Layer
* http 프로토콜에 암호화 기능을 추가하여 request, response되는 정보를 암호화 하여 전송한다. 
* https를 프로토콜로 사용하게 되면, 로그인, 회원가입 시 입력한 정보가 암호화 되어 어느정도(100%는 아님) 보안상 안전을 보장한다.
* 최근 모 포털에서 http 프로토콜을 사용하다가 중간에 개인정보가 탈취되는 사고가 난 뒤로, 많은 웹서비스에서 https를 기본으로 사용하는 추세
* 인덱스 443번호 씀 https://www.naver.com:443/index.html

#### 인터넷에서 port 개념
* 한개의 ip주소를 가진 서버, 클라이언트(PC)는 1:1 연결만을 지원하는 체계이다
* 하지만 인터넷을 통해서 사용할 수 있는 서비스는 그 종류가 매우 다양하여 1개의 ip에서 1개의 서비스만을 사용하는 것은 매우 낭비가 된다.
* 그래서 OSI 7Layer에서 Layer3인 네트워크 계층에서는 1개의 ip로 1개의 연결을 허용하도록 하고 
* Layer4인 전송계층에서는 port라는 개념을 사용하여, 여러가지 서비스를 1개의 ip주소에서 사용할 수 있도록 만든 개념이다. 
  최대 65000여개 서비스
* TCP/IP 프로토콜은 OSI 7계층에서 3계층과 4계층을 사용하는 인터넷 프로토콜 규격이다. 

#### index
0~1023번호까지는 Well-known port 셰계적으로 사용하는 포트이므로 함부로 건들 수 없음
1023~ 자유롭게 사용하는 포트 번호 