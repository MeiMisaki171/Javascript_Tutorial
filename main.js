//  Khai bao bien
var fullName = 'dsad';
var age = 26;

// Goi ham thong bao


console.log("type", typeof fullName)

// khoi tao mang array
var languages = [
    'javascript',
    'PHP',
    'Ruby',
];

var emailKey = 'email';

//object
var myInfo = {
    name: 'nam',
    address: 'Ha Noi',
    age: '24',
    'nam': 'dep trai',
    [emailKey]: 'nguyenthanhnam@gmail.com',
    getName: function() {
        return this.name;
    }
};

// su dung function ---> phuong thuc
//con lai ---> thuoc tinh

console.log(myInfo['nam']);

var myFace = 'nam';

console.log(myInfo[myFace]);

console.log(myInfo);

delete myInfo.age;

console.log(myInfo.getName())


// Object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Nam', 'Nguyen', 'avatar');
var user = new User('Nam1', 'nguyen', 'avatar');

author.title = 'chia se';   //them thuoc tinh hoac phuong thuc rieng biet
user.comment = 'cam nhan';

console.log(author);
console.log(user);

console.log(author.constructor === User); //kiem tra lai ban thiet ke tu doi tuong

console.log(author.getName()); 


//Object prototype - Basic
User.prototype.className = 'F8'; //them thuoc tinh bang prototype
User.prototype.getClassName = function() {
    return this.className;
} //them thuoc tinh bang prototype

console.log(author.className);


//Doi tuong Date
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() +1; //getMonth lay gia tri tu 0-11
var day = date.getDate();

console.log(`${day}/${month}/${year}`);

//document: javascript date object mozilla


//Cau truc re nhanh if Else
var date = 5;

if (date === 2) {
    console.log('hom nay la thu 2');
} else if (date === 3) {
    console.log('hom nay la thu 3');
} else if (date === 4) {
    console.log('hom nay la thu 4');
} else {
    console.log('loi')
}
//lap tuc dung lai khi tim duoc ket qua dung


//Cau truc re nhanh switch

var date = 2;

switch(date) {
    case 2:
        console.log('hom nay la thu 2');
        break;
    case 3:
        console.log('hom nay la thu 3');
        break;
     case 4:
        console.log('hom nay la thu 4');
        break;
     case 5:
        console.log('hom nay la thu 5');
        break;
    default:
        console.log('khong biet'); //viet cuoi cung. neu gia tri cua bien khong lot vao case
                                   //nao thi thuc hien lenh default
}
//lot vao tat ca cac case dung sau case dung, vi vay nen phai dung break
//neu duoc cho truoc gia tri cua bien thi su dung switch, thuogn dung voi truong hop tu 3 case tro len


//toan tu 3 ngoi - Ternary operator

var course = {
    name: 'Javascript',
    coin: 250
}

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log('Mien phi');
// }  //cach thong thuong

//dung toan tu 3 ngoi:
var result = course.coin > 0 ? `${course.coin} Coins`: 'Mien phi'; //3 ve, ngan cach boi dau '?'
                                                                   //va dau ':' 
                                                                   //kiem tra ve 1 co dung k
                                                                   //neu dung in ra ve 2
                                                                   //neu sai in ra ve 3
console.log(result);


// Vong lap - Loop

// 1. for - Lap voi dieu kien dung
// 2. for/in - Lap qua key cua doi tuong
// 3. for/of - Lap qua value cua doi tuong
// 4. while - Lap khi dieu kien dung
// 5. do/whilt - Lap it nhay 1 lan, sau do lap khi dieu kien dung

// For loop

for (var i = 1; i<=10; i++) {
    console.log(i);
}

//ung dung vong lap de lay ra phan tu cua mang
var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart'
];  //tao 1 mang

var arrayLength = myArray.length; //gan do dai cua mang vao bien, neu su dung luon thuoc tinh length
                                  //de dat dieu kien thi se phai truy cap lien tuc thuoc tinh length
                                  //nen dat ra ben ngoai de toi uu code

for (var i=0; i < arrayLength; i++) {
    console.log(myArray[i]);
} //i se tang theo chieu dai cua mang sau do se xuat ra gia tri cua tung phan tu trong mang

//For/in loop

var myInfo = {
    name: 'Nam',
    age: 24,
    address: 'Ha Noi'
};

for (var key in myInfo) {                      //object co bao nhieu key thi chay bay nhieu vong
    console.log(myInfo[key]);                  //lay value cua key de in ra
}

//For/of loop
//mang
var languages = [
    'Javascript',
    'PHP',
    'Java',
    'Dart'
];

for (var value of languages) {
    console.log(value);                            //loc ra tung phan tu cua mang
}
//doi tuong - khong the loc ra phan tu cua doi tuong voi cach thong thuong- su dung object.keys
var myInfo = {
    name: 'Nam',
    age: 24,
    address: 'Ha Noi'
};

for (var value of Object.keys(myInfo)) {          //Object.keys() dua doi tuong ve 1 mang
    console.log(myInfo[value]);
}
//cach 2 
// for (var value of Object.values(myInfo)) {
//     console.log(value)
// }


//Vong lap while

var i=0;
while (i<10) {
    i++;
    console.log(i)
}

//voi array

var i = 0;
while (i<myArray.length) {
    console.log(myArray[i]);
    i++;
}

//Vong lap do/while

var i = 0;
// do {
//     i++;                                 //kiem tra dieu kien tu lan lap thu 2
//     console.log(i)                             
// } while (i < 10);


//tao 1 vong lap ket thuc o lan lap thu n
var isSuccess = false;
do {
    i++;

    console.log('nap the lan '+ i);

    if (true) {                         //luc nay dieu kien if k chay, bien isSuccess van la false
                                         // !isSuccess --> true --> thuc hien vong lap while 
        isSuccess = true;
    }
} while (!isSuccess && i<=3);


//Break & Continue in loop

for (var i=0; i < 10; i++) {

    if (i%2 !== 0) {
        continue;
    }
    
    console.log(i);

    if (i > 5) {
        break;
    }
}


//Vong lap long nhau

var myArray = [
    [1,2],
    [3,4],
    [5,6]
];

for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j]);    //lay ra phan tu j cua mang con i cua mang cha myArray
    }
}


//Loop...

for (var i =100; i>0; i--) {
    console.log(i);
}

for (var i = 0; i <= 100; i += 5) {
    console.log(i);
}


/*
 * Array methods:
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
 */

var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTMl, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 0
    },
    {
        id: 5,
        name: 'Javascript',
        coin: 500
    }
];


//forEach duyet tung phan tu cua mang
courses.forEach(function(course) {            //callback - truyen 1 ham vao qua tham so
    console.log(course)                       
});  

//every
var isFree =  courses.every(function(course, index) {  //every lap qua tung phan tu mang va goi
    return course.coin ===0;                           //nguoc lai ham da truyen vao va truyen vao
                                                       //1 tham so - nhung phan tu cua mang.
                                                       // tra ve khi tat ca deu dung 
});
console.log(isFree);

//some  cach dung tuong tu nhu every, ket qua tra ve khi chi can co 1 doi tuong dung

//find tim kiem
var course = courses.find(function(course, index) {
    return course.name === 'Ruby'                     //kiem tra trong mang co thanh phan cho truoc
                                                      //hay khong, neu co thi xuat ra mang do,
                                                      //chi xuat ra duoc 1 mang
});
console.log(course);

//filter 
var listCourses = courses.filter(function(course, index) {
    return course.name === 'Ruby'                     //giong find nhung xuat ra duoc tat ca mang
});
console.log(listCourses);

//map - dung de chinh sua element cua array
function courseHandler(course) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
    };
};
var newCourses = courses.map(courseHandler);
console.log(newCourses);

//reduce - nhan ve 1 gia tri duy nhat khi tinh toan trong array
function coinHandler(accumulator, currentValue, currentIndex) {
    return accumulator + currentValue.coin;
};
var totalCoin = courses.reduce(coinHandler, 0);

console.log(totalCoin);
//accumulator: bien khoi tao - tham so thu 2 cua reduce - trong truong hop nay la 0
//currentValue: gia tri cua element can tinh toan
//doan code tren chuyen thanh:
var totalCoin = courses.reduce(function(total, course) {
    return total + course.coin;
}, 0);
console.log(totalCoin);

//voi 1 mang la 1 chuoi so thi k can gia tri khoi tao, vd:
var numbers = [100, 200, 300, 400];
var totalNumbers = numbers.reduce(function(total1, number) {
    return total1 + number
});
console.log(totalNumbers);


//Flat - lam phang mang tu depth array - mang sau
var depthArray = [1, 2, [3, 4], 5, 6, [7,8,9]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
       return flatOutput.concat(depthItem)
}, []);          // rut ra tung item trong mang, dung concat de noi lai thanh 1 mang moi
console.log(flatArray);


//includes method - co san tron array va string

var title = 'Responsive web design';
console.log(title.includes('Responsive')); //kiem tra xem chuoi co tu nay k, tra ra boolean

var courses = ['javascript', 'PHP', 'Dart'];
console.log(courses.includes('javascript', -1));  //kiem tra trong array


/*
Math object
- Math.PI                                              -lay ra so pi
- Math.round()                                         -lam tron so
- Math.abs()                                           -gia tri tuyet doi
- Math.ceil()                                          -chi lam tron tren
- Math.floor()                                         -chi lam tron duoi
- Math.random()                                        -tra ve so thap phan ngau nhien < 1
- Math.min(), Math.max()                               -tra ve so lon nhat, nho nhat
*/


//Callback?
//la ham, duoc truyen qua doi so khi goi 1 ham khac
//vd
function myFunction(param) {
    if (typeof param === 'function') {           //kiem tra xem param co phai function k
        param('abc');
    }
}                                                //param se duoc truyen vao duoi dang 1 function
function myCallback(value) {                     //khi dua gia tri vao param, ham callback se duoc
    console.log('Value:', value);                //nap gia tri vao value, sau do in ra
}
myFunction(myCallback)

//vd2
var courses = [
    'a',
    'b',
    'c'
];
courses.map(function(course) {
    console.log(course);
})


// forEach, find, filter, some, every, reduce
var courses = [
    'Javascript',
    'PHP'
];

course.length = 10;                         //empty elements of array: tuc la neu dat do dai cua
                                            //mang nhieu hon so phan tu trong mang, thi phan con lai 
console.log(courses);                       //se la empty, va neu dung vong lap, no se hien thi la undefine

for (var i= 0; i< courses.length; i++) {
    console.log(courses[i]);
}


//forEach method
var courses = [
    {
        name: 'nam',
        age: 0
    },
    1,
    'PHP',
    'Ruby'
];

courses.forEach(function(course, index, array) {     // forEach khong tra ve gi het
    console.log(course, index, array);              //tra ve 3 tham so: course, index, array
});

//tao forEach2 - dung callback
Array.prototype.forEach2 = function(callback) {    //array prototype //dinh nghia them 1 element - forEach2
    for (var index in this) {                      
        if (this.hasOwnProperty(index)) {          //for in se duyet qua ca element nam trong prototype
            callback(this[index], index, this);    // khi do ket qua tra va se co ca forEach2
        }                                          //hasOwnProperty loai bo nhung element trong proto
    }                                                    
}                                                

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
});


//tao filter2 - dung callback
//filter
var courses = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 780
    },
    {
        name: 'Ruby',
        coin: 880
    }
];
var filterCourses = courses.filter(function(course, index, array) {
    return course.coin > 700;
});
console.log(filterCourses);

//filter2
Array.prototype.filter2 = function(callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }

    return output;
}
var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 780,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 880,
        isFinish: false
    }
];
var filterCourses = courses.filter2(function(course, index, array) {
    return course.coin > 700;
});
console.log(filterCourses); 

//some - chay qua tung element, neu tim duoc phan tu dung tra ve luon

Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
            return true;
            }
        }
    }
    return false;
}
var result = courses.some2(function(course, index, array) {
    return course.isFinish;
});
console.log(result);

//every 
Array.prototype.every2 = function(callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output;
}

var result = courses.every2(function(course, index, array) {
    return course.coin > 680;
});
console.log(result);

//de quy

/*
1. xac dinh diem dung
2. logic handle -> tao ra diem dung
*/

//vd tao 1 countdown

function countDown(num) {
    if(num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(3)


// HTML DOM

/*
DOM gom 3 thanh phan
-element: tat ca the tag: h1, body,...
-attribute: thuoc tinh trong the mo: class="", id="", href="", src=""
-text
*/

document.write('Hello world')

//Document: ID, class, tag, CSS selector, HTML collection

var headingNode = document.getElementById('heading');
console.log(headingNode)

var headingNodes = document.getElementsByClassName('heading');
console.log(headingNodes)

var listItemNodes = document.querySelectorAll('.box-1 li');
console.log(listItemNodes);

var boxNode = document.querySelector('.box-1');
//cong viec 1: Su dung toi boxNode
console.log(boxNode);

//cong viec 2: su dung toi cac li elements la con cua box-1
console.log(boxNode.getElementsByTagName('li'));
console.log(boxNode.querySelector('p'));


//Attribute node & Text node
// DOM attributes

var headingElement = document.querySelector('h1');

headingElement.title = 'Heading';
headingElement.setAttribute('class', 'heading')

getValue = headingElement.getAttribute('class');
console.log(getValue);

// innerText, textContent

var headingElement = document.querySelector('.heading');
console.log(headingElement.innerText)

headingElement.innerText = 'New heading';


//innerHTML, outerHTML

var boxElement = document.querySelector('.box');
boxElement.innerHTML = '<h2>New heading</h2>';  //them element node
console.log(document.querySelector('h2').innerText)


//Node properties

var boxElement = document.querySelector('.box');

console.log([boxElement]);


//DOM style 

var boxElement = document.querySelector('.box');

Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green',
});

console.log(boxElement.style.width);


// ClassList property

// add                      them class vao element
//contains                  kiem tra 1 class co nam trong element nay hay k
//remove                    xoa bo 1 class khoi element
//toggle                    neu co class do, goi oggle thi xoa bo, khong co thi toggle them vao

var boxElement = document.querySelector('.box');
boxElement.classList.add('red');
console.log(boxElement.classList);
console.log(boxElement.classList.contains('red'));
setTimeout(() =>{
    boxElement.classList.remove('red');
}, 2000);
setInterval(() =>{
    boxElement.classList.toggle('red');
}, 1000);


//DOM events

//1.Attribute events                                    dinh nghia thang event vao attribute trong the tag html
//2.Assign event using the element node

var h4Elements = document.querySelectorAll('h4');

for(var i = 0; i < h4Elements.length; i++) {
    h4Elements[i].onclick = function(e) {                    //mouseEvent.target : tra lai chinh element dang
        console.log(e.target);                               //lang nghe event nay
    }
}

//inout/ select

var inputValue; 
var inputElement = document.querySelector('input[type="text"]');
inputElement.oninput = function(e) {                           //onchange, oninput
    inputValue = e.target.value;                               //lay gia tri input luu vao bien          
}


var inputElement = document.querySelector('input[type="checkbox"]');
inputElement.onchange = function(e) {
    console.log(e.target.checked);
}

var inputElement = document.querySelector('select');
inputElement.onchange = function(e) {
    console.log(e.target.value);
}

//Key up /down

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function(e) {                          //keyboardEvent
//     console.log(e.which); 
// }

// document.onkeydown = function(e) {
//     switch(e.wh) {

//     }
// }

//preventDefault
//stopPropagation

var aElement = document.querySelectorAll('a');

for(var i = 0; i< aElement.length; i++) {
    aElement[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://www.facebook.com/profile.php?id=100005459717824')) {
            e.preventDefault();
        }
    }
}


document.querySelector('h5').onclick = 
function() {
    console.log('DIV')
};

document.querySelector('button').onclick = 
    function(e) {
        e.stopPropagation();
        console.log('Click me!')
    }


// 1. Event listener
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance

// 1. Xu ly nhieu viec khi event xay ra
// 2. Lang nghe / Huy bo lang nghe

var btn = document.getElementById('btn');

btn.onclick = function() {
    console.log('Viec 1');
    console.log('viec 2');
    alert('viec 3');
}
setTimeout(function() {
    btn.onclick = function () {}
}, 3000)

console.log(btn);

btn.addEventListener('click', function(e) {
    console.log(Math.random());
});

function viec1() {
    console.log('viec1');
}
setTimeout(function () {
    btn.removeEventListener('click', viec1);
}, 3000);


// JSON
// 1. La mot dinh dang du lieu (dinh dang duoi dang chuoi)
// 2. JavaScript Object Notation
// 3. JSON: String Number, Boolean, Null, Array, Object 
// Stringify: Tu JS sang JSON
// Parse: Tu JSON sang JS


// Promise

//Sync - Dong bo
//Async - Bat dong bo

// setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame

//Callback

// sleep 
setTimeout(function(){
    console.log(1);
}, 1000);
console.log(2);

// Callback hell
// Pyramid of doom

setTimeout(function () {
    console.log(1);
    setTimeout(function(){
        console.log(2);
        setTimeout(function() {
            console.log(3);
        }, 1000);
    }, 1000);
}, 1000);

// 1. Khoi tao Promise
// 2. Executor

// 1. Pendding
// 2. Fulfilled
// 3. Reject
var promise = new Promise(
    //Executor
    function(resolve, reject) {
        // Logic
        // Thanh cong: resolve()
        // That bai: reject()

        // Fake call API
        resolve([
            {
                id: 1,
                name: 'JavaScript'
            }
        ]);
    }
);

promise
    .then(function(courses) {
        console.log(courses);
    })
    .catch(function(error) {     // Neu khong co .catch trinh duyet se bao loi: Uncaught (in promise)
        console.log(error);        
    })
    .finally(function() {
        console.log('Done!');        
    })

// Cach tra loi khi phong van: Truoc khi co Promise ta thuong dung callback
// dung callback se co truong hop xay ra callback hell, code bi kho hieu
// chung ta dung promise de khac phuc Callback hell
// De tao ra 1 Promise, ta su dung tu khoa 'new' voi Promise, trong construction
// cua no ta se truyen vao 1 Executor function
// Trong Executor function ta se nhan duoc 2 tham so dang ham: Resolve, Reject
// su dung qua .then(), .catch() deu nhan callback function va no se duoc thuc thi

// Ly thuyet va cach hoat dong
// VD 
var users = [
    {
        id: 1,
        name: 'JavaScript'
    },
    {
        id: 2,
        name: 'Python'
    },
    {
        id: 3,
        name: 'Java'
    }
];
var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'co'
    },
    {
        id: 2,
        user_id: 2,
        content: 'na'
    }
];
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000)
    });
}
function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
        resolve(result);
        },1000);
    });
}
getComments()
   .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        })

        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments
                }
                });
   })

   .then(function(data) {
        var commentBlock = document.getElementById('comment-block')
        var html ='';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id == comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        commentBlock.innerHTML = html;
   })



function sleep(ms) {                          //Tao f sleep nhan tham so ms
    return new Promise( function(resolve) {   // return ra promise, de resolve
        setTimeout(resolve, ms);              //sleep nhan value la bao nhieu thi se duoc truyen vao ham setTimeout
    });
}

sleep(1000)
    .then(function() {                        //sau 1000ms thi moi lot vao .then()
        console.log(1);
        return sleep(1000);                   //tiep tuc return lai promise, cho promise chay moi thuc hien buoc tiep tho
    })
    .then(function() {                        //sau khi sleep tiep 1000ms thi thuc hien .then() thu 2
        console.log(2);
        return sleep(1000);                   //thoi gian sleep cho .then() tiep theo
    })
    .then(function() {                        //Neu gap reject giua duong thi gap loi ngay
        console.log(2);                       //Khong chay xuong chuoi .then() tiep theo nua
        return new Promise(function(resolve, reject) {
            reject('co loi');
        })                  
    })
    .then(function() {                        //KHong chay vi da bat loi
        console.log(3);
        return sleep(1000);                  
    })
    .catch(function(err) {                    //Bat loi bang .catch()
        console.log(err);
    })
    .then(function() {                        //Tiep tuc duoc chay dang sau .catch()
        console.log(4);
        return sleep(1000);                  
    });

    // 1. Promise.resolve
    // 2. Promise.reject
    // 3. Promise.all

    var promise = new Promise(
        function(resolve, reject) {
            // Logic
            //resolve('Success!');
            //
            reject('Error!');
        }
    );
// var promise = Promise.resolve('Success!');         //Khong bao gio chay vao .catch()
// var promise = Promise.reject('Error!');            //Khong chay vao .then()
    promise
        .then(function(result) {
            console.log('result: ', result);
        })
        .catch(function(err) {
            console.log('err: ', err);
        });

//Promise.all
//VD: khi chya tuan tu, mat 7s de tra ve ket qua
var promise1 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 2000);
    }
);
var promise2 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2,3]);
        }, 5000);
    }
);
//dung promise.all se chi mat 5s khi 2 ham chay song song
Promise.all([promise1,promise2])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2)); //Lay ra 2 mang ket qua va noi lai bang ham .concat
    })


//ECMASript- ES6- 2015

// 1. Let, const
// 2. Template Literals
// 3. Multi-line String
// 4. Arrow function
// 5. Classes
// 6. Default parameters
// 7. Destructuring
// 8. Rest parameter
// 9. Spread
// 10. Enhanced object literals
// 11. Tagged template literal
// 12. Modules

// 1. var/ let, const: Scope, Hosting
// 2. const / var, let: Assignment

// Code block: if else, loop, {}, ...
// Code thuan: var
// Babel: const, let
// -Khi dinh nghia bien va khong gan lai bien do: const
// -Khi can gan lai gia tri cho bien: let

// ca var, let va const deu de gan gia tri cho bien
//pham vi truy cap: Scope
// var duoc ho tro hosting, nghia laf co the khai bao sau khi gan gia tri
// const khong the thay doi gia tri gan

//Arrow function
const logger2 = (log) => {
    console.log(log);
}
logger2('message');

const sum = (a,b) => a+b;
console.log(sum(2, 2));

const sum1 = (a,b) => ({ a:a, b:b});

const logger3 = log => console.log(log);
logger3('message')

const course1 = {
    name: 'javascript basic',
    getName: () => {
        return this.name;   // context //undefine
    }
};
console.log(course1.getName());


// Template literals

const courseName = 'Javascript';
const courseName2 = 'PHP';
const description = `Course name: ${courseName} ${courseName2}` ;
console.log(description)


// Multi-line sttring

const line1 = 'Line 1\n' 
+ 'Line 2\n'
+ 'Line 3\n'
console.log(line1)

const line2 = `Line 4
Line 5
line 6`
console.log(line2)


// Classes

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    run() {
        const isSuccess = false;

        if (true) {
            isSuccess = true;

        }
    }
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('JavaScript', 1200);
console.log(phpCourse);
console.log(jsCourse);


// Enhanced object literals
// 1. Dinh nghia key: value cho object
// 2. Dinh nghia method cho object
// 3. Dinh nghia key cho object duoi dang bien

var name1 = 'Javascript';
var price = 1000;
var course = {
    name1,
    price,
    getName () {
        return name1;
    }
};
console.log(course.getName);

var fieldName = 'new-name';
var fieldPrice = 'price';
const course3 = {
    name: 'Javascript',
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
};
console.log(course3);


// Default parameters values
function logger4(log = 'gia tri mac dinh') {

    console.log(log);
}
logger4();


// Destructuring - phan ra
var array = ['Javascript', 'PHP', 'Ruby']

//array
var [a, b, c] = array;
//Lay ra a va c: var [a, , c] = array;
//console.log(a, c);
console.log(a, b, c);

//object
function logger5 ({name4, price}) {
    console.log(name4);
    console.log(price);
}
logger5({
    name4: 'ReactJS',
    price : 1000,
    description2: 'Description content'
})

// Rest parameters (...)

var [a, ...rest] = array; //Lay ra cac phan tu con lai tru destructuring
console.log(rest);        //Rest ket hop voi destructuring

var course = {
    name3 : 'Javascript',
    price : 1000,
    image: 'image-address',
    children: {
        name4: 'ReactJS'
    }
};
var { name3, ...newObject } = course;
console.log(newObject); //Lay ra object moi da xoa 1 cap key: value

var {name3: parentName, children: {name4} } = course;
//Dat lai ten trong truong hop bi trung bien
console.log(parentName);
console.log(name4);

var {name3, description1 = 'default description'} =course;
//Khi khong co description trong cuorse, no se lay ra default value
console.log(description1);

//Rest: cho phep mot ham chap nhan so luong tham so khong xac dinh duoi dang 1 mang
function logger6(...params) { //Khi su dung toan tu rest no se thanh mang
    console.log(params);
}

logger6(1,2,3,4,5,6);


// Spread(...): bo di cap ngoac va noi cac phan tu lai

//array
var array1 = ['heo', 'bo', 'lon'];
var array2 = ['ga', 'cho'];
var array3 = [...array2, ...array1];
console.log(array3);

//object
var object1 = {
    name: 'javascript'
}
var object2 = {
    price: 100
};

var object3 = {
    ...object1,
    ...object2
};
console.log(object3);

//Truyen doi so thi se la spread, dinh nghia tham so thi la rest
var array4 = ['Javascript', 'PHP', 'Ruby']
function logger7 (...rest) {
    for (var i = 0; i<rest.length; i++) {
        console.log(rest[i]);
    }
}
 logger7(...array4);


 // Tagged template literals

 function highlight(...rest) {
    console.log(rest);
 }

 var a= 'sdsad';
 var b= 'ghs';
 const html = highlight`highlight ca ${a} tai ${b} ne`;
 console.log(html);
 

 // Modules: Import / Export


 //Optional chaining(?.): su dung khi khong chac chan key do co ton tai k

 const objs = {
    name:'alice',
    cat: {
        name: 'dinah',
        cat2: {
            name: 'john',
            cat3: {
                name: 'jane'
            }
        }
    }
 };
//Optional chaining(?.):
if (objs?.cat?.cat2?.cat3) {
    console.log(objs.cat.cat2.cat3.name);
}


// Fetch
// 1. Front-end: Xay dung giao dien nguoi dung
// 2. Back-end: Xay dung logic xu ly + Co so du lieu

// API -> Application programming interface : Cong giao tiep giua cac phan mem

// Back-end -> API -> Fetch -> JSON
// -> JSON.parse -> Javascript types
// -> Render ra giao dien voi HTML

var postApi = 'https://jsonplaceholder.typicode.com/posts'
fetch(postApi)
   .then(function(response) {
        return response.json();
        // JSON.parse -> Javascript types
   })
   .then(function(posts) {
        console.log(posts);
   });
   

var courseApi = 'http://localhost:3000/courses';

fetch(courseApi)
  .then(function(response) {
    return response.json();
  })
  .then(function(courses) {
    console.log(courses);
  })


  // Fetch
  // -JSON server: API server (Fake) / Mock API 
  // -CRUD
  //        - Create: Tao moi -> POST
  //        - Read: Lay du lieu -> GET
  //        - Update: Chinh sua -> PUT/ PATCH
  //        - Delete: Xoa -> DELETE
  // -Postman