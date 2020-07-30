
// let li = document.querySelectorAll('li');
// let ul = document.querySelector('ul');

// form.onclick = function(event) {
//   event.target.style.backgroundColor = 'yellow';

  

//   // браузеру нужно некоторое время, чтобы зарисовать всё жёлтым
//   // setTimeout(() => {
//   //   alert("target = " + event.target.tagName + ", this=" + this.tagName);
//   //   event.target.style.backgroundColor = ''
//   // }, 0);
// };

// ul.addEventListener('click', function(e) {
// 	console.log(e.target)
// })

// document.body.addEventListener('click', function(e) {
// 	if (e.target.tagName === 'UL' || e.target.tagName === 'LI') 

// 		console.log(e.target.tagName)
// 	else 
// 		clear();
// 		console.log('clear', e.target.tagName)
// });

// li.forEach(elem => {
// 	elem.addEventListener('click', function(e) {
// 		clear();
// 		elem.classList.add('act');
// 	})
// })

// function clear() {
// 	li.forEach(elem => {
// 		elem.classList.remove('act');
// 	})
// }



// let prom = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(200);
// 		if (1) {
// 			console.log(5)
// 		}
// 	}, 2000);
// });

// prom.then((res) => {
// 	console.log(res);
// })

/*
let res = [
	{
		name: 'Sun 1',
		link: true,
		child: [
			{
				name: 'Cloud 1',
				link: true,
				parent: 'Sun 1'
			},
		]
	},
	{
		name: 'Sky 2',
		link: false
	},
	{
		name: 'Ground 3',
		link: false,
		child: [
			{
				name: 'Grass',
				link: false,
				parent: 'Ground 3'
			},
			{
				name: 'Flower',
				link: false,
				parent: 'Ground 3'
			},
		]
	},

]*/


// let test = [
// 	{
// 		name: 'Sun 1',
// 		link: true
// 	},
// 	{
// 		name: 'Sky 2',
// 		link: false
// 	},
// 	{
// 		name: 'Ground 3',
// 		link: false
// 	},
// 	{
// 		name: 'Cloud 1',
// 		link: true,
// 		parent: 'Sun 1'
// 	},
// 	{
// 		name: 'Grass',
// 		link: false,
// 		parent: 'Ground 3'
// 	},
// 	{
// 		name: 'Grass111',
// 		link: false,
// 		parent: 'Ground 3'
// 	},
// 	{
// 		name: 'Grass111231231',
// 		link: false,
// 		parent: 'Ground 3'
// 	},
// 	{
// 		name: 'Flower',
// 		link: false,
// 		parent: 'Ground 3'
// 	},
// ];

// let parent = createParentArr(test);
// console.log('parent', parent);

// let child = createChildArr(test);
// console.log('child', child);

// let result = setChildren(parent, child);
// console.log('result', result);

// function setChildren(parent, child) {
// 	let parentArr = parent;
// 	let childArr = child;
// 	let childLen = childArr.length;
// 	let childElem;

// 	for (let i = 0; i < childLen; i++) {
// 		childElem = childArr.splice(0, 1);
// 		for (let elem of parentArr) {
// 			if (elem.name === childElem[0].parent) {
// 				if (!elem.children) elem.children = [];
// 				elem.children.push(childElem[0])
// 			}
// 		}
// 	}
// 	return parentArr;
// }


// //Syntax
// function createParentArr(obj) {
// 	let res = [];
// 	for (let elem of obj) {
// 		if (!elem.parent) res.push(elem)
// 	}
// 	return res;
// }

// function createChildArr(obj) {
// 	let res = [];
// 	for (let elem of obj) {
// 		if (elem.parent) res.push(elem)
// 	}
// 	return res;
// }




// let str = "ctgry3-item0-$Организации надомной формы обслуживания";
// let index = str.indexOf("$");

// console.log(str.substr(index + 1))








class JQR {
    constructor(sel) {
        this.sel = sel;
        this.elements = document.querySelectorAll(sel);
    }

    _iterible(callback) {
    	for (let elem of this.elements) callback(elem);
    }
}









// JQuery Replacement
function $(sel) {
    return new JQR(sel);
}


//Миксины
function extend(object) {
    var mixins = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < mixins.length; ++i)
    {
        for (var prop in mixins[i])
        {
            if (typeof object.prototype[prop] === "undefined")
            {
                object.prototype[prop] = mixins[i][prop];
            }
        }
    }
}

let FunctionalityMixin =  {
	on(event, callback) {
    	return this._iterible(elem =>  elem.addEventListener(event, callback));
    }
}

let HTMLMixin =  {
	html(str) {
    	return this._iterible(elem =>  elem.innerHTML = str);
    },

    hide() {
    	return this._iterible(elem =>  elem.style.display = "none");
    },

    show() {
    	return this._iterible(elem =>  elem.style.display = "block");
    },

    addClass(className) {
    	return this._iterible(elem =>  elem.classList.add(className));
    },

	removeClass(className) {
    	return this._iterible(elem =>  elem.classList.remove(className));
    },

    toggleClass(className) {
    	return this._iterible(elem => elem.classList.toggle(className));    	
    },

    toggleShow() {
    	return this._iterible(elem => {
    		if (elem.style.display === "") this.show();
    		else if (elem.style.display === "block") this.hide();
    		else if (elem.style.display === "none") this.show();
    	});
    }
}

extend(JQR, FunctionalityMixin, HTMLMixin);

let p = $('.descr');

$(".btn").on('click', function() {
	p.toggleShow('act');
});