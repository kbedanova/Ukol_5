const resetPlan = (plan) => {
    plan.classList.remove("plan--selected")  
  }

const selectPlan = (planNumber) => {
    const elPlans = document.querySelector(".plans");
    const elPlanList = elPlans.querySelectorAll(".plan");

    elPlanList.forEach(plan => resetPlan(plan));

    const plan = elPlanList[planNumber];
    plan.classList.add("plan--selected");
}


//selectPlan(2)
selectPlan(1)