select distinct sname from Sailors left join Reserves on Sailors.sid = Reserves.sid left join Boats on Reserves.bid = Boats.bid where color = 'red' and 'green';
