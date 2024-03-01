function webMD(ailments, meds) {
    let scores = []; //this array will keep track of how many symptoms each med matches
    let highscore = 0; //this will track the highest amount of matches
    let output = []; //we will push our highest matching meds here

    for (let i = 0; i < meds.length; i++) { //go through our meds
        let med = meds[i]; //this med
        let oneScore = 0; //initialize a score for this med
        for (let symptom of med.treatableSymptoms) { //loop through symptoms this med treats
            if (ailments.includes(symptom)) { //if the symptom is one of our ailments
                oneScore++; //increase the score
            }
        }
        scores[i] = oneScore; //store the score for this index in its corresponding index in scores arr
        highscore = Math.max(oneScore, highscore); //check/update highscore
    }

    for (let i = 0; i < scores.length; i++) { //loop through our scores
        if (scores[i] == highscore) {
            output.push(meds[i].name); // push the names of the meds that we scored the highest
        }
    }
    return output; //all done!
}

function webMD(ailments, meds) {
    let treatment = [];
    let flag = true;
    //loop through all the meds
    for (med of meds) {
        //for each med check all ailments
        for (ailment of ailments) {
            //if that medicine treatable symptoms doesn't include ailment set flag and break out
            if (!med.treatableSymptoms.includes(ailment)) {
                flag = false;
                break;
            }
        }
        //if all aliments were found in treatableSymptoms push that meds name into array also reset flag
        if (flag) {
            treatment.push(med.name);
        }
        flag = true;
    }
    return treatment;
}

// alt
function webMD2(ailments, meds) {
    // set a max
    let maxSymptomMatchCount = 0;

    // set a map
    const ailmentsMap = {};
    let matchedMeds = [];

    // create map of ailments to avoid relooping
    for (const ailment of ailments) {
        ailmentsMap[ailment] = true;
    }
    // {pain: true, depression : true}

    // loop your meds..
    for (const med of meds) {
        let symptomsMatchCount = 0;

        // loop the symptoms of each med...
        for (const symptom of med.treatableSymptoms) {
            // check if symptom is in our ailmentsMap
            if (ailmentsMap.hasOwnProperty(symptom)) { // 0(1)
                symptomsMatchCount++;
            }
        }

        // so we matched symptoms from our ailment to this med...
        if (symptomsMatchCount > 0) {
            // if they're equal to our max, add the med, it's good
            if (symptomsMatchCount === maxSymptomMatchCount) {
                matchedMeds.push(med.name);
                // if they're more than our max...
            } else if (symptomsMatchCount > maxSymptomMatchCount) {
                // update the max, toss the entire old array of matched meds
                // start a new array with this better med as the first element
                maxSymptomMatchCount = symptomsMatchCount;
                matchedMeds = [med.name];
            }
        }
    }

    return matchedMeds;
}

// alt3
const webMDfunctional = (ailments, medications) =>
    medications
        .filter(medicine =>  // filter medications, look at each
            ailments.every(sym => // loop our ailments, test each one with .every
                medicine.treatableSymptoms.includes(sym) // => check if treatable
            )
        )
        .map(({ name }) => name); // map the result and only keep names

// .every checks each element with a test and returns true if all the elements pass
// think questions like "does every number divide by 5 in this list of numbers?"


// ------- student solutions --------
const webMD = (symptomsToCheck, medications) => {
    let newArray = [];
    // loop over array of medication objects
    for (medication of medications) {
        // loop over array of treatable symptoms on medication object
        for (medicationSymptoms of medication.treatableSymptoms) {
            // loop over array of symptomstocheck, meanwhile checking treatable symptoms array to see if element in symptomstocheck exists in treatable symptoms array
            for (let i = 0; i < symptomsToCheck.length; i++) {
                if (!medicationSymptoms.includes(symptomsToCheck[i])) {
                    // if it doesnt exist we dont want the object at all
                    break;
                }

                newArray.push(medication);
            }
        }
    }
    return newArray;
};

console.log(webMD(['back pain'], medications));

// -----------------------
function webMD(ailments, meds) {
    // let string = ailments.join(' ');
    const map = {};
    let result = [];
    for (let item of meds) {

        for (let i = 0; i < item.treatableSymptoms.length; i++) {
            if (ailments.includes(item.treatableSymptoms[i])) {
                if (map[item.name]) {
                    map[item.name]++;
                }
                else {
                    map[item.name] = 1;
                }

            }
        }
    }
    // console.log(map);
    let count = 1;
    for (let key in map) {
        if (map[key] > count) {
            count = map[key];
            result = [key];
        }
        if (map[key] === count && count == 1) {
            result.push(key);
        }
    }
    return result.length > 0 ? result : null;
}

// ------------------
function webMD(ailments, meds) {
    let highestNumOfTreatedSymptoms = -1;
    let bestMedsArr = [];

    for (const med of meds) {
        //loop through meds and then match their treatable symptoms with ailments
        let symptomCount = 0;
        for (const ailment of ailments) {
            if (med.treatableSymptoms.includes(ailment)) {
                symptomCount++;
            }
        }
        if (symptomCount === 0) {
            // don't add it to the array if it treats nothing
            continue;
        }
        if (symptomCount === highestNumOfTreatedSymptoms) {
            // if this med matches the best symptom count, add it to the array
            bestMedsArr.push(med.name);
        } else if (symptomCount > highestNumOfTreatedSymptoms) {
            // if this med has more treatable symptoms, reset the array to only include this med
            bestMedsArr = [med.name];
            highestNumOfTreatedSymptoms = symptomCount;
        }
    }
    return bestMedsArr;
}

// ---------------
function webMD(ailments, meds) {
    let numAilments = 0;
    let numTreatedArr = [];
    for (let med of meds) {
        numAilments = 0;
        for (let ailment of ailments) {
            if (med.treatableSymptoms.includes(ailment)) {
                numAilments++;
            }
        }
        numTreatedArr.push({ name: med.name, numAilments: numAilments });

    }
    // console.log(numTreatedArr)
    numTreatedArr = [...numTreatedArr].sort((a, b) => b.numAilments - a.numAilments);
    let answerArr = [];
    // console.log(numTreatedArr)
    if (numTreatedArr[0].numAilments == 0) {
        return null;
    } else {
        highest = numTreatedArr[0].numAilments;
        for (let med of numTreatedArr) {
            // console.log("med", med)
            if (med.numAilments === highest) {
                answerArr.push(med.name);
            } else if (med.numAilments < highest) {
                break;
            }
        }
    }
    return answerArr;
}

// ---------
function webMD(ailments, meds) {
    let result = [];
    let max = 1;
    for (const med of meds) {
        const matches = ailments.filter((ailment) => {
            return med.treatableSymptoms.includes(ailment);
        }).length;
        if (matches > max) {
            max = matches;
            result = [];
            result.push(med.name);
        }
        else if (matches === max) {
            result.push(med.name);
        }
    }
    return result;
}

// =============
// pseudo code : map over the medications extracting each medicine to look inside treatableSymptoms.
// Use .includes to check if the treatableSymptoms includes the ailment, if it does then increase count.
// Create an object with the medication name as the key and the value with the pair being the count.
// Our return will be the name of our created object.medication with the highest count key pair.
function webMD(ailments, medications) {
    const medicine = [];
    const bestMed = [];
    medications.map((med) => {
        let count = 0;
        for (const ailment of med.treatableSymptoms) {
            if (ailments.includes(ailment)) {
                count++;
            }
        }
        let tempMed = { medicineName: med.name, ailmentsCured: count };
        bestMed.push(tempMed);
        console.log("yes", bestMed, tempMed);
    });

    // TODO
    // get the highest value(s) and return
}

console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));