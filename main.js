var input;
var sentence;

input = window.prompt('Please enter a sentence');
if(input.length > 0)
{
	sentence = input;
	sentence.toLowerCase();
}
else
{
	alert('You did not enter a sentence');
}

var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
var replacers = ['w', 'q', 'l', 'x', 'p', 'h'];

var indices = [];

for(var i=0; i<sentence.length; i++)
{
	if(sentence[i] === 'a')
	{
		indices.push(i);
	}
}

var list = indices.toString();

if(list.length > 0)
{
	var newSent = sentence.replace(sentence[indices[1]], 'w');
	console.log(newSent);
}
else
{
	console.log('we did not find any A\'s in this statement');
}