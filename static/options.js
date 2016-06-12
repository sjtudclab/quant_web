function strategyTypeChange(strategyType) {
    var strategyName = document.getElementById('strategyName')
    for (var i = 0; i < strategyName.options.length; i++) {
        if (strategyName.options[i].style.display == 'none') {
            strategyName.options[i].selected = 'True'
            strategyName.options[i].style.display = ''
        } else {
            strategyName.options[i].style.display = 'none'
        }
    }
    document.getElementById('params').style.display = 'none'
}

function strategyNameChange(strategyName) {
    document.getElementById('params').style.display = 'none'
}

function showParams() {
    document.getElementById('params').style.display = ''
}

function submit() {
    var url = "/strategy";
    var strategyType=document.getElementById("strategyType").value;
    var strategyName=document.getElementById("strategyName").value;
    url = url + "?strategyType=" + strategyType;
    url = url + "&strategyName=" + strategyName;
    window.location.href = url;
}
