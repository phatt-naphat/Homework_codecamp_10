SELECT sname from Sailors left join Reserves on Sailors.sid = Reserves.sid where bid is not null;
