(function() {
    var contributionsE = document.querySelector(".js-calendar-graph-svg");

    if (contributionsE === null) {
        return;
    }

    var contributionsElms = contributionsE.querySelector("g").getElementsByTagName("g");
    var legendElms = document.querySelector(".legend").getElementsByTagName("li");

    [].forEach.call(contributionsElms, function(contributionsE) {
        var graphElms = contributionsE.getElementsByTagName("rect");

        [].forEach.call(graphElms, function(graphE) {
            var fill = graphE.getAttribute("fill");

            switch(fill) {
                case "#d6e685":
                    graphE.setAttribute("fill", "#9fc1ea");
                    break;
                case "#8cc665":
                    graphE.setAttribute("fill", "#60b7d8");
                    break;
                case "#44a340":
                    graphE.setAttribute("fill", "#0592d0");
                    break;
                case "#1e6823":
                    graphE.setAttribute("fill", "#252775");
                    break;
                default:
                    // nothing
                    break;
            }
        });
    });

    [].forEach.call(legendElms, function(legendE) {
        var style = legendE.style;
        var backgroundColor = style.backgroundColor;

        switch(backgroundColor) {
            case "rgb(214, 230, 133)":
                style.backgroundColor = "#9fc1ea";
                break;
            case "rgb(140, 198, 101)":
                style.backgroundColor = "#60b7d8";
                break;
            case "rgb(68, 163, 64)":
                style.backgroundColor = "#0592d0";
                break;
            case "rgb(30, 104, 35)":
                style.backgroundColor = "#252775";
                break;
            default:
                // nothing
                break;
        }
    });
})();
