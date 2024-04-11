const Example = () => {
  // オブジェクト型
  const numObj = {
    nums: [1, 2, 3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for (let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    },
  };

  // 関数型
  // データと処理は別々にする => 状態と処理の分離
  const nums = [1, 2, 3];
  const sum = (arry) => {
    const nums = arry;
    let sumValue = 0;
    for (let i = 0; i < nums.length; i++) {
      sumValue += nums[i];
    }
    return sumValue;
  };

  return (
    <>
      <h3>状態管理と処理を分離:{numObj.sum()}</h3>
      <p>状態（データ）と処理（やりたいこと）は切り離す:{sum(nums)}</p>
    </>
  );
};

export default Example;
