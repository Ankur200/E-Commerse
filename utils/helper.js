export const getDiscountedPercentage=(original,discounted)=>{

    const discount=original-discounted;

    const discountPer=(discount/original)*100;

    return discountPer.toFixed(2);

}