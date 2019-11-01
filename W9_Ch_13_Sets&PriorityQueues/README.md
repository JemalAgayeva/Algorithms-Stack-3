# Exam Prep Algo Mid Week
- c#: Extras/exam_prep/csharp/dateOverlapChecker.js

- [Algo Book Ch. 13](http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2147)
- For Fri, pick from extras or do both wed and thurs algos on wed to free up thurs and fri to introduce heaps (no code available currently for this)


# Sets
- A set is a mathematical term for a collection of values

## Types of Sets

### Normal Set
- No dupes allowed, attempting to add a dupe will result in nothing being added. Creating a set from an array or string with dupes will remove the dupes.
- does not track count of values b/c no dupes

### Multiset (contains dupes)
- tracks count of values because there are dupes

### Ordered Set / Multiset

### Unordered Set / Multiset

### Intersection
- only values that are shared between the sets deduped

### Union
- [Union Example](https://i.ytimg.com/vi/WqYQ3OakKP0/maxresdefault.jpg)
- all values from both sets included but deduped

### Union Multiset
- the higher count of duped values are kept
- if there are 3 number ones in one set and 2 number ones in the other set, 3 number ones would be kept

## What Can You Do With A Set?
- in js `new Set(val1, val2, valn)`
- iterate
- `.size`
- `.add(val)`
- `.has(val)`
- `.delete(val)`
  - returns `true` if value found & deleted

# Priority Queues
- an urgent care room works on a priority queue
- a data structure that acts like a Queue, but does care about values instead of insertion time. This data structure maintains its elements in value order, regardless of the order in which they were added. When we dequeue, we will always get the item that is most prioritized. E.g., prioritize a list of to-do items so that when we take an item from the Queue, it is always the most important one. OS subsystems such as networking and storage work in this way: diverse I/O requests are continually added to a prioritized queue, and the system extracts (and satisfies) them in priority order.