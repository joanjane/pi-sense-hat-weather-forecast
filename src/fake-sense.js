class FakeSense {
    showMessage(message, speed, color, done) {
        console.log(message);
        done && done();
    }

    clear() {
        
    }
}

module.exports = new FakeSense();