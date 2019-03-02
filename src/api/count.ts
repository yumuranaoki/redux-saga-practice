class countAPI {
  static async get() {
    const res = await fetch('http://localhost:3000/lazy', {

    })
    return res.json();
  }
}

export default countAPI;