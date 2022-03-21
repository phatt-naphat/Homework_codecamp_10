Select Distinct B.color from Sailors S Left join Reserves R ON S.sid = R.sid
Left join Boats B ON B.bid = R.bid Where S.sname = 'Lubber';
