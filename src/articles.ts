// eslint-disable-next-line
export default [
  {
    type: 'writting',
    index: 0,
    title: '네트워크 관리사 2급 필기 요약',
    subTitle: '이것만 알면 누구나 합격할 수 있답니다~ 🤗',
    contents: [
      {
        preface: 'OSI 7계층에 대해',
        text: 'OSI 7계층은 1계층부터 순서대로 물리 계층, 데이터 링크 계층, 네트워크 계층, 전송 계층, 세션 계층, 표현 계층, 응용 계층으로 이루어져 있다.\n물리 계층은 통신 케이블을 통해 전기 신호를 사용해 자료를 전송하는 계층이다.\n데이터 링크 계층에서는 MAC 주소를 기반으로 통신하고, 오류 제어 등의 기능을 담당한다.\n4계층 전송 계층에서는 응용 계층의 메시지를 최종 목적지의 프로세스에 제대로 도달할 수 있도록 총책임을 맡는다. 오류 제어 및 흐름 제어의 기능을 수행하고, 포트 주소를 사용한다.\n5계층에서는 프로세스 간의 논리적인 연결을 수행해 준다.\n7계층 응용 계층에서는 사용자의 요구에 따라 메시지를 만들고, 표현 계층에는 이 메시지를 표현하는 방식이 정의되어 있다.',
        image: require('./assets/writting-0/1.png').default,
      },
      {
        preface: '주요 Well-Known 포트',
        text: 'Well-Known 포트란 한국어로 잘 알려진 포트라는 뜻이다.\n대표적인 Well-Known 포트로는 22번 SSH (Secure Shell), 25번 SMTP, 53번 DNS (Domain Name System), 23번 Telnet, 80번 HTTP, 443번 HTTPS 등이 있다.\n대부분의 유닉스 계열의 운영체제의 경우 잘 알려진 포트를 개방하기 위해서는 루트 권한이 있어야 한다.\nWell-Known 포트는 어떤 대상에 의해 강제되는 것은 아니지만, Well-Known 포트에 대해 IANA (Internet Assigned Numbers Authority)라는 곳에서 권고안을 내 놓는다.\n추가적으로, 포트 번호의 범위는 0번부터 65535번까지이다.',
        image: require('./assets/writting-0/2.png').default,
      },
      {
        preface: '네트워크 토폴로지',
        text: '네트워크 토폴로지란, 네트워크의 물리적 또는 논리적인 구성 형태를 의미하는 용어이다. 대표적으로, 그물형 토폴로지, 성형 토폴로지, 그리고 버스형 토폴로지 등이 있다.\n그물형 토폴로지에서, 모든 장치는 다른 장치들과 "전용" 점대점 링크 관계를 가진다. 따라서 전체 네트워크를 완성하려면, 링크는 N(N-1)/2개가 필요하다.\n성형 토폴로지에서는, 일반적으로 모든 장치들은 중앙 제어 장치와 연결되어 있다. 장치끼리는 연결되어 있지 않지만, 중앙 제어 장치를 통해서 각 장비 간 통신할 수 있다.\n마지막으로, 링형 토폴로지에서는 모든 장치가 자신 양쪽에 있는 장치와 연결되어 있다. 이 점대점 구성이 모여 링의 형태를 이루게 된다. 토큰을 사용하는 토큰 링 구조가 대표적이다.',
        image: require('./assets/writting-0/3.png').default,
      },
      {
        preface: 'IPv4 (Internet Protocol Version 4)',
        text: 'IP 프로토콜은 네트워크를 통해 데이터를 전달하는 프로토콜이다. 호스트의 인터넷 주소를 결정해 준다.\nIP 주소는 32bit 길이를 가지며, 네트워크 ID와 호스트 ID로 구성되어 있다.\n같은 네트워크에서는 모든 호스트가 같은 네트워크 ID를 가지며, 같은 호스트 ID는 사용할 수 없다.\n또, 호스트 ID가 0인 경우 해당 네트워크 전체를 의미하며, 255인 경우에는 브로드 캐스트 주소를 의미한다.',
        image: require('./assets/writting-0/4.png').default,
      }
    ],
  },
  {
    type: 'practical',
    index: 0,
    title: '네트워크 관리사 2급 실기 요약 - 1',
    subTitle: '이것만 알면 누구나 합격할 수 있답니다~ 🤗',
    contents: [
      {
        preface: '다이렉트 케이블 제작하기',
        text: '랜 케이블을 벗긴 다음, 꼬여 있는 선을 풀어 선을 그림과 같은 순서로 배열해 다이렉트 케이블을 10분 안에 만들어야 한다.\n선의 순서는 "흰주 - 주황 - 흰녹 - 파랑 - 흰파 - 녹색 - 흰갈 - 갈"이다.\n크로스 케이블과는 달리 다이렉트 케이블은 서로 다른 계층에 있는 장비끼리 연결할 때 사용되는 케이블이다.',
        image: require('./assets/practical-0/1.png').default,
      },
      {
        preface: '리눅스 명령어',
        text: 'ifconfig: 윈도우에서의 ipconfig 명령어처럼 IP 관련 정보를 확인할 수 있는 명령어이다.\nfind: 리눅스에서 파일이나 폴더를 찾을 때 사용하는 명령어이다.\ndf: 리눅스에서 현재 설치 된 디스크의 여유 공간과 사용량을 확인할 수 있다.\npwd: 터미널에서 현재 위치한 디렉터리를 출력해 준다.\nman: 특정 명령어에 대한 매뉴얼을 확인할 수 있는 명령어이다.\ntop: 메모리와 CPU 사용량 등을 모니터링 하는 명령어이다. -q 옵션을 사용하면 지연없이 실시간으로 확인할 수 있다.',
      },
      {
        preface: 'IPv6',
        text: 'IPv6는 IPv4의 IP 주소 부족 현상을 해결하기 위한 차세대 IP 체계이다. IPv6 주소는 16진수로 구성되어 있으며, 총 128비트이다.\nIPv6에서는 유니캐스트, 애니캐스트와 멀티캐스트를 지원한다.\n유니캐스트는 출발지와 목적지가 하나뿐인 일대일 통신이다. 또, 멀티캐스트는 원하는 그룹에만 데이터를 전달하는 방식이다. 마지막으로 브로드캐스트는 같은 네트워크에 있는 모든 장비들에게 보내는 통신이다. 아파트 관리사무소에서 하는 방송으로 예로 들 수 있을 것이다. 하지만 이 브로드캐스트는 IPv4에서만 지원하는 것으로, IPv6에서는 지원되지 않는다.',
        image: require('./assets/practical-0/3.png').default,
      },
      {
        preface: 'OSI 7계층 프로토콜',
        text: 'OSI 7계층 중, 3계층 네트워크 계층에서 사용되는 프로토콜은 RARP, ARP, ICMP, IGMP, RIP 등이 있다.\n7계층 응용 계층에서는, SMTP, Telnet, FTP, HTTP(HTTPS) 등이 있으며, 4계층 전송 계층에서는 SCTP, TCP, UDP가 있다.\n4계층인 전송 계층에서는 TCP와 UDP가 있으며, 두 프로토콜의 차이점은 필기 문제에서 자주 출제되는 주제 중 하나이다.\n네트워크 계층에서는 IP, ARP, ICMP가 있고, 데이터 링크 계층에는 이더넷 프로토콜이 있다.',
        image: require('./assets/practical-0/2.png').default,
      },
    ],
  },
  {
    type: 'practical',
    index: 1,
    title: '네트워크 관리사 2급 실기 요약 - 2',
    subTitle: '시뮬레이터에서 가상 컴퓨터 만들어 보기',
    contents: [
      {
        preface: '제시 문제',
        text: '제시 문제는 다음과 같다.\n가상 컴퓨터의 이름, 위치, 메모리 크기 등을 지정해야 하며, 가상 하드디스크를 설정해야 한다.',
        image: require('./assets/practical-1/1.png').default,
      },
      {
        preface: '초기 상태',
        text: '처음에는 아무 가상 컴퓨터도 없는 상태이다.\n가상 컴퓨터를 만들게 되면 이 화면에 새로 생긴 가상 컴퓨터가 보일 것이다.',
        image: require('./assets/practical-1/2.png').default,
      },
      {
        preface: '가상 컴퓨터 생성 창 들어가기',
        text: '그림에 보이는 것처럼 (ICQAServer - 새로 만들기 - 가상 컴퓨터) 버튼을 누른다.',
        image: require('./assets/practical-1/3.png').default,
      },
      {
        preface: '시작 하기 전 단계',
        text: '다음 버튼을 누른다.',
        image: require('./assets/practical-1/4.png').default,
      },
      {
        preface: '이름 및 위치 지정 단계',
        text: '이름 란에 제시된 이름(네트워크 관리사)을 써 넣는다.',
        image: require('./assets/practical-1/5.png').default,
      },
      {
        preface: '메모리 할당 단계',
        text: '메모리 란에 제시된 메모리 크기(1024MB)를 써 넣는다.',
        image: require('./assets/practical-1/6.png').default,
      },
      {
        preface: '네트워킹 구성 단계',
        text: '네트워킹 구성 단계에서는 특별히 지시된 내용이 없으므로 바로 다음 버튼을 눌러도 된다.',
        image: require('./assets/practical-1/7.png').default,
      },
      {
        preface: '가상 하드 디스크 연결 단계',
        text: '문제에서 제시된 대로 가상 하드 디스크의 이름(네트워크관리사.vhd)과 위치(C:\\Hyper-V\\네트워크관리사\\), 크기(64GB)를 입력한 후 다음 버튼을 누른다.',
        image: require('./assets/practical-1/8.png').default,
      },
      {
        preface: '설치 옵션 단계',
        text: '문제 지시 사항대로, 나중에 운영 체제 설치 옵션을 눌러 준 후 다음 버튼을 누른다.',
        image: require('./assets/practical-1/9.png').default,
      },
      {
        preface: '요약 단계',
        text: '우리가 입력했던 정보들로 생성된 가상 컴퓨터에 대한 정보가 표시된다.',
        image: require('./assets/practical-1/10.png').default,
      },
      {
        preface: '끝',
        text: '다시 맨 처음 화면으로 돌아왔다.\n생성한 가상 컴퓨터가 가상 컴퓨터 목록에 보이는 것을 확인할 수 있다.',
        image: require('./assets/practical-1/11.png').default,
      },
    ]
  },
  {
    type: 'practical',
    index: 2,
    title: '네트워크 관리사 2급 실기 요약 - 3',
    subTitle: '시뮬레이터에서 DNS 서버 설정하기',
    contents: [
      {
        preface: '제시 문제',
        text: '제시 문제는 다음과 같다.\n사진에 보이는 대로 DNS 서버를 구성하면 되는 문제이다.',
        image: require('./assets/practical-2/1.png').default,
      },
      {
        preface: '영역 생성 창 들어가기',
        text: '그림에 보이는 것처럼 (ICQAServer>정방향 조회 영역 - 새 영역) 버튼을 누른다.',
        image: require('./assets/practical-2/3.png').default,
      },
      {
        preface: '시작 하기 전 단계',
        text: '다음 버튼을 누른다.',
        image: require('./assets/practical-2/4.png').default,
      },
      {
        preface: 'DNS 영역 형식',
        text: '문제에서 따로 제시된 내용이 없으므로 기본 옵션대로 두고 다음 버튼을 누른다.',
        image: require('./assets/practical-2/5.png').default,
      },
      {
        preface: '영역 이름 지정',
        text: '문제에서 제시한 대로 영역 이름을 icqa.or.kr로 설정한다.',
        image: require('./assets/practical-2/6.png').default,
      },
      {
        preface: '생성 결과 확인',
        text: '방금 생성한 영역 이름이 icqa.or.kr인 정방향 조회 영역이 생긴 것을 확인한다.',
        image: require('./assets/practical-2/7.png').default,
      },
      {
        preface: '조회 영역 레코드 확인',
        text: '기본적으로 생성되어 있는 DNS 레코드가 문제에서 요구하는 모습과 같은지 확인한다.\nSOA 레코드의 일련 번호가 문제와 다르므로 SOA 레코드에 대한 상세 설정을 해 주어야 한다.',
        image: require('./assets/practical-2/8.png').default,
      },
      {
        preface: 'SOA 레코드 상세 설정',
        text: '문제 사진에 나와 있는 것처럼 일련번호, 주 서버 및 책임자 값을 변경해 준 후 확인 버튼을 누른다.',
        image: require('./assets/practical-2/9.png').default,
      },
      {
        preface: 'A 레코드 생성하기',
        text: '아무 곳이나 클릭한 후, 새 호스트 메뉴를 클릭한다.\n팝업창의 이름에는 www를, IP 주소에는 192.168.100.100을 기입한다.',
        image: require('./assets/practical-2/11.png').default,
      },
      {
        preface: 'CNAME 레코드 생성하기',
        text: '같은 방식으로 클릭한 후, 새 별칭 메뉴를 클릭한다.\n별칭 이름에는 ftp를, 대상 호스트의 FQDN 필드에는 www를 입력한 후 확인 버튼을 누른다.',
        image: require('./assets/practical-2/13.png').default,
      },
      {
        preface: '끝',
        text: '문제에서 요구한 대로 DNS 정방향 조회 영역이 설정된 것을 확인할 수 있다.',
        image: require('./assets/practical-2/14.png').default,
      },
    ]
  }
];
