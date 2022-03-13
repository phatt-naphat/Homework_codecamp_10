SELECT sname from Sailors left join Reserves on Sailors.sid = Reserves.sid where Reserves.bid = '103';
