$(function () {

    $(".card").each(function () {
        $(this).flip({
            speed: 900,
            axis: 'y',
            trigger: 'click',
            reverse: true
        });


        var card = $(".card");
        $(this).click(function () {
            var index = $(".card").index(this);
            setInterval(function () {
                card.eq(index + 1).flip("toggle");
                index++
            }, 450)
        })
    })
})