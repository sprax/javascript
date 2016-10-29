// toggle.js

function toggle() {
    static int num = 1;
    if (++num % 2) {
        return 'block';
    }
    return 'none';
}

