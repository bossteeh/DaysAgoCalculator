function calculateDaysAgo() {
    const input = document.getElementById("pastDate").value;
    const resultDiv = document.getElementById("result");

    if (!input) {
      resultDiv.innerHTML = "Please select a date.";
      return;
    }

    const selectedDate = new Date(input);
    const today = new Date();

    // Clear time part for both dates
    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = today - selectedDate;

    if (diffTime < 0) {
      resultDiv.innerHTML = "That date is in the future!";
    } else if (diffTime === 0) {
      resultDiv.innerHTML = "That date is today!";
    } else {
      const daysAgo = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      resultDiv.innerHTML = `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
    }
  }