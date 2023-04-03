// Yêu cầu: Sử dụng Javascript để thực hiện các công việc sau

// 1. Thêm 3 job bổ sung vào phần 'job' của trang bằng cách sao chép 'job-card' ban đầu.
const data = ["test1", "test2", "test3"];

const jobs = document.querySelector(".jobs");
const job1 = document.querySelector(".job-card");

const job2 = job1.cloneNode(job1);
const job3 = job1.cloneNode(job1);
const job4 = job1.cloneNode(job1);

jobs.appendChild(job2);
jobs.appendChild(job3);
jobs.appendChild(job4);
// 2. Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
job2.querySelector("h3").innerText = "Javascript Developer";
job3.querySelector("h3").innerText = "JavaDeveloper";
job4.querySelector("h3").innerText = "Python Developer";
// 3. Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const countEle = document.querySelector("#jobs-listed span");
const jobCards = document.querySelectorAll(".job-card");
countEle.innerText = jobCards.length;
// 4. Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
const searchEle = document.getElementById("search");
searchEle.addEventListener("keyup", (e) => {
  let value = e.target.value;
  Array.from(jobCards).forEach((job) => {
    const jobTitle = job.querySelector("h3").innerText;
    jobTitle.toLowerCase().includes(value.toLowerCase())
      ? (job.style.display = "block")
      : (job.style.display = "none");
  });
});
// 5. Bấm vào Nút "All jobs" để reset ô tìm kiếm và hiển thị ra tất cả các công việc
const btnAll = document.querySelector("#show-all");
btnAll.addEventListener("click", () => {
  searchEle.value = "";
  Array.from(jobCards).forEach((job) => (job.style.display = "block"));
});
