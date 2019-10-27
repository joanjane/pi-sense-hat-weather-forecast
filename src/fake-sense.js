class FakeSense {
    showMessage(message, color, done) {
        console.log(message);
        done();
    }
}

module.exports = new FakeSense();