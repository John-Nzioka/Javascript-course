var user = {
    firstName: "John",
    lastName: "Nzioka",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (CourseName) {
      this.courseList.push(CourseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount);
user.buyCourse("React JS course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount());