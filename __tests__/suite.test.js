const { merged,substrGen, spinal, bubbleSort} = require("../exercise");
const fs = require("fs");
const path = require("path");

const helper = __dirname.split("/");

helper.pop();
const filepath = path.resolve(helper.join("/"), "exercise.js");
let file;

beforeAll(async () => {
  file = await fs.promises.readFile(filepath, "utf-8");
});

//Exercice 1

test("Testing the merged exercise", () => {
  expect(merged([], [])).toBeDefined();
  expect(merged([1, 2, 4], [1, 3, 4])).toEqual([1, 1, 2, 3, 4, 4]);
  expect(merged([2, 3, 4], [3, 5, 7])).toEqual([2, 3, 3, 4, 5, 7]);
  expect(merged([], [0])).toEqual([0]);
  expect(!file.match(/\.\s*sort\s*\(/) && !file.match(/\.\s*reduce\s*\(/)).toBe(
    true
  );
});

//Exercice 2
test('Testing the substrGen exercise', () => { 
    expect(substrGen('abcabcbb')).toBeDefined();
    expect(substrGen('abcabcbb')).toEqual([
        'a',      'ab',     'abc',     'abca',
        'abcab',  'abcabc', 'abcabcb', 'abcabcbb',
        'b',      'bc',     'bca',     'bcab',
        'bcabc',  'bcabcb', 'bcabcbb', 'c',
        'ca',     'cab',    'cabc',    'cabcb',
        'cabcbb', 'a',      'ab',      'abc',
        'abcb',   'abcbb',  'b',       'bc',
        'bcb',    'bcbb',   'c',       'cb',
        'cbb',    'b',      'bb',      'b'
      ]);
    expect(substrGen('abc')).toEqual([ 'a', 'ab', 'abc', 'b', 'bc', 'c' ])
    expect(substrGen('lagann')).toEqual([
        'l',    'la',    'lag',
        'laga', 'lagan', 'lagann',
        'a',    'ag',    'aga',
        'agan', 'agann', 'g',
        'ga',   'gan',   'gann',
        'a',    'an',    'ann',
        'n',    'nn',    'n'
      ])
 })

 
//Exercice 3
 test('Testing the spinal exercise', () => { 
    expect(spinal('this is a test')).toBeDefined();
    expect(spinal('this is a Test')).toBe('this-is-a-test')
    expect(spinal('ThisIsATest')).toBe('this-is-a-test')
 })


//Exercice 4
test('Testing the bubbleSort exercise', () => { 
    expect(bubbleSort([
        1,
        4,
        2,
        8,
        345,
        123,
        43,
        32,
        5643,
        63,
        123,
        43,
        2,
        55,
        1,
        234,
        92
      ])).toEqual([
        1,    1,   2,   2,   4,
        8,   32,  43,  43,  55,
       63,   92, 123, 123, 234,
      345, 5643
    ]);

    expect(bubbleSort([504,38,1,3,5,6,7,9,23,45,123,533,43,90,75,36,65,6,7,1999])).toEqual([
        1,    3,  5,  6,   6,   7,
        7,    9, 23, 36,  38,  43,
       45,   65, 75, 90, 123, 504,
      533, 1999
    ])
    
 })
