SELECT distinct sid from Reserves left join Boats on Reserves.sid = Boats.sid where Color = 'Red';
