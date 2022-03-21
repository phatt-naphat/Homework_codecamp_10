Select distinct sid from Sailors S where S.sid in
(Select distinct S.sid from Sailors S LEFT JOIN Reserves R 
ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid where B.color = 'Red')
AND S.name NOT IN
(Select distinct S.sid from Sailors S LEFT JOIN Reserves R
ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid where B.color = 'Green');
