class FakeSense {
    showMessage(message, speed, color, done) {
        console.log(message);
        done && done();
    }
}

module.exports = new FakeSense();