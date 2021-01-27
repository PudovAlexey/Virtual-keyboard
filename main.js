function virtualKeyboard(btns, input) {
    let caps = document.querySelector('.caps');
    let num = document.querySelector('.num');

    btns.forEach(item => {
        item.addEventListener('click', function() {
            let action = this.dataset.action;
            if (action == undefined && !caps.classList.contains('indicator')) {
                input.value += item.innerHTML;

            } else if (action == " ") {
                input.value += ' ';
            } else if (action == "Tab") {
                input.value += '    ';
            } else if (action == "Enter") {
                input.value += '<br>';
            } else if (action == 'Backspace') {
                input.value = input.value.substring(0, input.value.length - 1)
            } else if (action == 'Delete') {
                input.value = input.value.substring(0, input.value.length - input.value.length)
            } else if (action == 'CapsLock') {
                item.classList.toggle('indicator');
            } else if (caps.classList.contains('indicator')) {
                input.value += item.innerHTML.toUpperCase();
            } else if (action == 'num-item' && num.classList.contains('indicator')) {
                input.value += item.innerHTML;
            }
        })
    })
    caps.addEventListener('click', function() {
        if (this.classList.contains('indicator')) {
            btns.forEach(item => {
                if (!item.classList.contains('no-upper')) item.style['text-transform'] = 'uppercase';
            });
        } else {
            btns.forEach(item => {
                item.style['text-transform'] = 'lowercase';
            });
        }
    })

    num.addEventListener('click', function() {
        this.classList.toggle('indicator')
    })
}


function keyboard(btns, input) {
    let caps = document.querySelector('.caps');
    let num = document.querySelector('.num');
    let rightLocation = KeyboardEvent.DOM_KEY_LOCATION_RIGHT;
    let leftLocation = KeyboardEvent.DOM_KEY_LOCATION_LEFT;
    let numpad = KeyboardEvent.DOM_KEY_LOCATION_NUMPAD;
    input.addEventListener('keydown', function(event) {
        btns.forEach(item => {

            if (event.key == item.innerHTML && item.dataset.action !== 'num-item' && event.location !== numpad || event.key == `${item.dataset.action}`) {
                item.style['transform'] = 'scale(0.95)'
                item.style['background'] = '#0053ba'
            } else if (event.location == rightLocation && event.keyCode == '16' && item.dataset.action == 'right-shift' ||
                event.location == rightLocation && event.keyCode == '17' && item.dataset.action == 'right-ctrl' ||
                event.location == rightLocation && event.keyCode == '18' && item.dataset.action == 'right-alt') {

                item.style['transform'] = 'scale(0.95)'
                item.style['background'] = '#0053ba'
            } else if (event.location == leftLocation && event.keyCode == '16' && item.dataset.action == 'left-shift' ||
                event.location == leftLocation && event.keyCode == '17' && item.dataset.action == 'left-ctrl' ||
                event.location == leftLocation && event.keyCode == '18' && item.dataset.action == 'left-alt') {

                item.style['transform'] = 'scale(0.95)'
                item.style['background'] = '#0053ba'
            } else if (num.classList.contains('indicator') && event.location == numpad && item.dataset.action == 'num-item' && event.key == item.innerHTML) {
                item.style['transform'] = 'scale(0.95)'
                item.style['background'] = '#0053ba'

            }
        })
    })

    input.addEventListener('keyup', function(event) {
        btns.forEach(item => {
            if (event.key == item.innerHTML || event.key == `${item.dataset.action}`) {
                item.style['transform'] = 'scale(1)'
                item.style['background'] = '#0069ed'
            } else if (event.location == rightLocation && event.keyCode == '16' && item.dataset.action == 'right-shift' ||
                event.location == rightLocation && event.keyCode == '17' && item.dataset.action == 'right-ctrl' ||
                event.location == rightLocation && event.keyCode == '18' && item.dataset.action == 'right-alt') {
                item.style['transform'] = 'scale(1)'
                item.style['background'] = '#0069ed'
            } else if (event.location == leftLocation && event.keyCode == '16' && item.dataset.action == 'left-shift' ||
                event.location == leftLocation && event.keyCode == '17' && item.dataset.action == 'left-ctrl' ||
                event.location == leftLocation && event.keyCode == '18' && item.dataset.action == 'left-alt') {
                item.style['transform'] = 'scale(1)'
                item.style['background'] = '#0069ed'
            } else if (num.classList.contains('indicator') && event.location == numpad && item.dataset.action == 'num-item' && event.key == item.innerHTML) {
                item.style['transform'] = 'scale(1)'
                item.style['background'] = '#0069ed'

            }
        })
        if (event.key == 'CapsLock') {
            caps.classList.toggle('indicator')
        } else if (input.value.substr(-1) === input.value.substr(-1).toUpperCase()) {
            caps.classList.add('indicator')
        } else {
            caps.classList.remove('indicator')
        }

        if (caps.classList.contains('indicator')) {
            btns.forEach(item => {
                if (!item.classList.contains('no-upper')) item.style['text-transform'] = 'uppercase'
            })

        } else {
            btns.forEach(item => {
                item.style['text-transform'] = 'lowercase'
            })
        }

        if (event.key == 'NumLock') {
            num.classList.toggle('indicator')
        } else if (event.location == numpad && event.keyCode >= 96 && event.keyCode <= 144) {
            num.classList.add('indicator')
        }
    })
}

keyboard(document.querySelectorAll('.keyboard-wrap button'), document.querySelector('.i-11'))
virtualKeyboard(document.querySelectorAll('.keyboard-wrap button'), document.querySelector('.i-11'));