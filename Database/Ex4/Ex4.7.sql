SELECT sname from Sailors left join Reserves on Sailors.sid = Reserves.sid 
left join Boats on Reserves.bid = Boats.bid where Boats.color = 'red' or Boats.color = 'green';
