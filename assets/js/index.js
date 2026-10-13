// 자바스크립트 항상 body 안에서 가장 아래에 써야함. 확인은 검사-console에서 확인 가능
    // 헤더 스크롤
        $(window).scroll(function () {
            let scrollTop = $(window).scrollTop();
            console.log(scrollTop);

            if(scrollTop > 100) {
                $("#header").addClass("active")
            }
            else {
                $("#header").removeClass("active")
            }

            // top 버튼
            if(scrollTop >= 700) {
                $(".top").addClass("active")
            }
            else {
                $(".top").removeClass("active")
            }
        });

    // 모바일 메뉴
        $("#mNav button").click(function () {
            $("#mNav nav").toggleClass("show");
        });

    // 푸터 메뉴
    // 방법1
    // $(".firstMenu").click(function () {
    //     $(this).next(".footer_dropdown").toggleClass("slide");
    // });

    // 방법2
        $(".firstMenu").click(function () {
            $(this).next(".footer_dropdown").slideToggle(300);
        });

    // # 클릭 했을 때 최상단으로 가는 거 막아줌
        $("#mNav nav ul li a").click(function (e) {
            e.preventDefault();
        });