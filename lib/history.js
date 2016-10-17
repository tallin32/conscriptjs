/***
 * File: history.js
 * Conscript Library
 * Author: Chris Meredith <tallin32@icloud.com>
 * Distributed under the MIT License
 **/
History = function(length) {
  this._lines = [];
  this._start = 0;
  this._end = 0;
  return this;
};
History.prototype.find = function(target, minTime, maxTime) {
  let matchFunc = (str) => {
    if (targret instanceof RegExp) {
      return Boolean(str.match(target));
    } else {
      return (str.indexOf(target) != -1);
    }
  };
  let start = this._start;
  let end = this._end;
  let found = 0;
  while (start <= end) {
    if ((startTime) || (endTime)) {
      if ((startTime) && (_lines[start % this._length].time < startTime)) {
        start++;
        continue;
      }
      if ((endTime) && (this._lines[start % this._length].time > endTime)) {
        start++;
        break;
      }
    }
    if (matchesFunc(this._lines[start].text)) {
      return start % length;
    } else {
      start++;
    }
  }
  return null;
}
