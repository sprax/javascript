<!DOCTYPE html>
<html>
<body>

<p>Click the button to display the formatted number.</p>

<button onclick="myFunction2()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
	let dt = "March 21, 2012";
	let ds = "Fri Sep 30 2016 20:00:00 GMT-0400 (EDT)";
    var d = Date.parse(ds);
    document.getElementById("demo").innerHTML = d;
}

function unixTimeStampFromMilliseconds(timeMs) {
    return Math.floor(timeMs / 1000);
}

function unixTimeStampFromDate(date) {
  return unixTimeStampFromMilliseconds(date.getTime());
}

function randomInRange(min, max) {
    return min + Math.floor((max - min) * Math.random());
}
 
function myFunction2() {
  // Fake data for dev -sprax
  let dataRows = [];
  let monthlyNewOrganizationCounts = [2,1,0,0]
  let monthlyNewProfileCounts = [3,0,0,0] 
  let cohortsMonthStartIsos = ["2016-10-01","2016-11-01","2016-12-01","2017-01-01"]        // ISO date strings
  //let cohortsMonthStartDates = _.map(cohortsMonthStartIsos, function(iso) { return new Date(Date.parse(iso)); });
  let monthsInQuery = cohortsMonthStartIsos.length;
  let dateNow = new Date();
  let yearNow = dateNow.getFullYear();
  let monthNow = dateNow.getMonth();	// Month index: 0 through 11
  //cohortsMonthStartDates[monthsInQuery] = dateNow;	// Add today as end date
  let cohortsMonthStartDates = [
    new Date("Fri Sep 30 2016 20:00:00 GMT-0400 (EDT)"),
    new Date("Mon Oct 31 2016 20:00:00 GMT-0400 (EDT)"), 
    new Date("Wed Nov 30 2016 19:00:00 GMT-0500 (EST)"),
    new Date("Sat Dec 31 2016 19:00:00 GMT-0500 (EST)"),
    new Date("Fri Jan 06 2017 01:48:31 GMT-0500 (EST)"),
  ]
  let fakeRowsCount = 0;
  let fakeOrgsCount = 0;
  let fakeOrgs = new Array(40);
  let fakeRows = []; // new Array(40);
  let minPid = 1000;
  // Add end-date to array:
  for (let j = 0; j < monthsInQuery; j++) {
    let year = cohortsMonthStartIsos[j].substring(0, 4);
    let mord = cohortsMonthStartIsos[j].substring(5, 7);
    let begTimeStamp = unixTimeStampFromDate(cohortsMonthStartDates[j]);
    let endTimeStamp = unixTimeStampFromDate(cohortsMonthStartDates[j+1]) - 1;
    let newOrgsCount = randomInRange(2 + j, 10 + j*2);
    monthlyNewOrganizationCounts[j] = newOrgsCount + randomInRange(2, j + 3)
    for (let k = 0; k < newOrgsCount; k++) {
      let orgId = 10000 + j * 1000 + k + '';
      let maxPid = minPid + randomInRange(10, 100)
      let createdTs = randomInRange(begTimeStamp, endTimeStamp); 
      fakeOrgs[fakeOrgsCount++] = { orgId: orgId, minPid: minPid, maxPid: maxPid, createdTs: createdTs };
      minPid += 100;
    }
    for (let q = 0; q < fakeOrgsCount; q++) {
      let fakeOrg = fakeOrgs[q];
      let cohortTs = fakeOrg.createdTs;
      let cutoffTs = randomInRange(begTimeStamp, endTimeStamp); 
      if (cohortTs < cutoffTs) {
        let orgId = fakeOrg.orgId; 
        let profId = randomInRange(fakeOrg.minPid, fakeOrg.maxPid).toString();
        let eventCount = randomInRange(2, 5);
        // fakeRows[fakeRowsCount++] = [year, mord, profId, orgId, (new Date(cohortTs*1000)).getMonth() + '', eventCount];
        // fakeRows[fakeRowsCount++] = [year, mord, profId, orgId, cohortTs.toString(), eventCount];
        if (eventCount > 1) {
          fakeRows[fakeRowsCount++] = [year, mord, orgId, cohortTs.toString(), eventCount.toString()];
        }
      }
    }
  }
  // dataRows = dataRows.concat(fakeRows);
  dataRows = fakeRows;
  let cohortMap = {};
  let monthlyTotalsRow = new Array(monthsInQuery + 1);
  monthlyTotalsRow[0] = "Total Active Organizations Per Month:";
  monthlyTotalsRow.fill(0, 1, 1 + monthsInQuery);
  for (let q = 0; q < dataRows.length; q++) {
    let row = dataRows[q];
    let eventYear = parseInt(row[0]);
    let eventMord = parseInt(row[1]);   // Month ordinal: 1 through 12
    //  ignore row[2] -- orgId -- because we're just counting the active orgs in this cohort
    let orgCreate = parseInt(row[3]);   // organization creation date as unix timestamp
    let cohortDate = new Date(orgCreate*1000)
    let cohortSeg = cohortDate.toISOString().substring(0, 7);
    let sumIndex = monthsInQuery - ((yearNow - eventYear)*12 + 1 + monthNow - eventMord);  // diff between month now and event month
    if (! (cohortSeg in cohortMap)) {
      let cohortRow = new Array(monthsInQuery + 1);
      cohortRow[0] = "Installed in " + cohortSeg;
      cohortRow.fill(0, 1, 1 + monthsInQuery);
      cohortMap[cohortSeg] = cohortRow;
    }
    cohortMap[cohortSeg][sumIndex] += 1;
    monthlyTotalsRow[sumIndex] += 1;
  }

  let cohortArray = [];
  Object.keys(cohortMap).sort().reverse().forEach(function(cohort, rowIndex) {
    let row = cohortMap[cohort];
    row[0] += ' (' + monthlyNewOrganizationCounts[monthsInQuery - 1 - rowIndex] + ' organizations)';
    for (let k = 1; k <= monthsInQuery; k++) {
      if (k < monthsInQuery - rowIndex) {
        row[k] = null;
      }
    }
    cohortArray[rowIndex] = row;
  });
  
  document.getElementById("demo").innerHTML = cohortArray.join("<br>");
}

</script>

</body>
</html>
