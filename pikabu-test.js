class JobSeeker {
	/**
	 * Assert #1
   * change the key of this in line 8 to make it pass the assert
	 */
	constructor() {
		let a = 0;
		this['toString'] = () => a +++ a;
	
	}
}

  // JobSeeker.prototype.toString = function () { return this.someName(); }
  let inst = new JobSeeker();


  console.assert(
	inst == 1 && inst == 3 && inst == 5
);