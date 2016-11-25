<?php

$db=mysqli_connect('127.0.0.1','root','','People');
if(mysqli_connect_errno())
{
  echo 'Database connection failed with following errors: '.mysqli_connect_error();
  die();
}

	if(isset($_GET['search_text']))
	{
		 $search_text=$_GET['search_text'];
	}
	if(!empty($search_text))
	{
    	   $sql="SELECT Name,Email,Country FROM mytable WHERE Name LIKE '".$search_text."%'";
    		$query_run=$db->query($sql);
    		$c=mysqli_num_rows($query_run);
    		if($c!=0)
    		{
                echo "<table class='table table-bordered table-condensed table-responsive fonter'>
                    <thead>
                        <tr class='bg-primary'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                <tbody>";
    			while($query_row=mysqli_fetch_assoc($query_run))
    			{
                    echo "<tr class='bg-info'>";
                    echo "<td>".$query_row["Name"]."</td>";
                    echo "<td>".$query_row["Email"]."</td>";
                    echo "<td>".$query_row["Country"]."</td>";
                    echo "</tr>";
    			}
    		}
    		else
    		{
    				echo "<font color=\"red\">No Names Found.";
    		}
            echo "</tbody>
            </table>";
	}
?>
