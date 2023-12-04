export const Greeting = () => {
  const myDate = new Date();
  const hours = myDate.getHours();
  let myGreeting;
  if (hours < 12) {
    myGreeting = "morning";
  } else if (hours >= 12 && hours <= 17) {
    myGreeting = "afternoon";
  } else if (hours >= 17 && hours <= 24) {
    myGreeting = "evening";
  }
  return <div> Good{myGreeting}</div>;
};
