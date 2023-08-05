class MinHeap {
    constructor() {
      this.items = [];
    }

    size() {
      return this.items.length;
    }

    peek() {
      return this.items[0]
    }

    swap(index1, index2) {
      [this.items[index1], this.items[index2]] = [this.items[index2],this.items[index1]];
    }
  
    add(item) {
      this.items.push(item);
      let index = this.items.length - 1;
      while (true) {
        let parentIndex = Math.floor((index - 1) / 2);
        //부모보다 자식이 작으면 자리 바꾸기
        if (this.items[index] < this.items[parentIndex]) this.swap(index, parentIndex);
        else break;
        index = parentIndex;
        if (index < 1) break;
      }
    }
  
    poll() {
      if (this.items.length <= 1) {
        return this.items.pop();
      }
      const value = this.items[0];
      this.items[0] = this.items[this.items.length - 1];
      this.items.pop();
  
      let index = 0;
      while (true) {
        //두 자식중 작은값의 자식 인덱스 찾기
        let lChildIndex = index * 2 + 1;
        let rChildIndex = index * 2 + 2;
        let minIndex = index;
        if (
          lChildIndex < this.items.length &&
          this.items[minIndex] > this.items[lChildIndex]
        ) {
          minIndex = lChildIndex;
        }
        if (
          rChildIndex < this.items.length &&
          this.items[minIndex] > this.items[rChildIndex]
        ) {
          minIndex = rChildIndex;
        }
        //위치 바꾸기
        if (minIndex !== index) {
          this.swap(index, minIndex);
          index = minIndex;
        } else break;
      }
      return value;
    }
  }