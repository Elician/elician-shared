export class Version {

  name

  constructor(version_name: string) {
    this.name = version_name
  }

  static at(version_name: string) {
    return new Version(version_name)
  }

  getName() {
    return this.name
  }

  _toAccept(s: string) {
    return '0'.repeat(6 - s.length) + s
  }

  getInt() {

    let split = this.getName().split('.')

    return Number(
      split[0] + this._toAccept(split[1] ?? '0') + this._toAccept(split[2] ?? '0')
    )

  }

  moreEqualsThen(version_name: string) {
    return this.getInt() >= Version.at(version_name).getInt()
  }
}