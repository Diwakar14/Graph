const variantOptions = [
  {
    key: "size",
    options: [{ key: "XL" }, { key: "L" }],
  },
  {
    key: "color",
    options: [{ key: "Red" }, { key: "Yellow" }, { key: "Pink" }],
  },
  {
    key: "pattern",
    options: [{ key: "Simple" }, { key: "Stripped" }],
  },
];

const variants = [
  {
    key: "size",
    options: [
      {
        key: "XL",
        nextOpt: {
          key: "color",
          options: [
            {
              key: "Red",
              nextOpt: {
                key: "pattern",
                options: [{ key: "Simple" }, { key: "Stripped" }],
              },
            },
            {
              key: "Yellow",
              nextOpt: {
                key: "pattern",
                options: [{ key: "Simple" }, { key: "Stripped" }],
              },
            },
            {
              key: "Pink",
              nextOpt: {
                key: "pattern",
                options: [{ key: "Simple" }, { key: "Stripped" }],
              },
            },
          ],
        },
      },
      {
        key: "L",
        nextOpt: {
          key: "color",
          options: [
            {
              key: "Red",
              nextOpt: {
                key: "pattern",
                options: [{ key: "Simple" }, { key: "Stripped" }],
              },
            },
            {
              key: "Yellow",
              nextOpt: {
                key: "pattern",
                options: [{ key: "Simple" }, { key: "Stripped" }],
              },
            },
            {
              key: "Pink",
              nextOpt: {
                key: "pattern",
                options: [{ key: "Simple" }, { key: "Stripped" }],
              },
            },
          ],
        },
      },
    ],
  },
];

// Output
// 1. Total Number of variants possible
// 2. List of each variants

// Output = 12
// const getTotalNumberOfVariants = (variantOptions) => {
//     let totalVariants =1;

//     variantOptions.forEach(element => {
//         totalVariants *= element.options.length;
//     });

//     return totalVariants;

// }

// const total = getTotalNumberOfVariants(variantOptions);
// console.log(total)

// Consider first node as the starting node.

// const stuffOption = (current, variantOptions) => {
//     let newCurr= {...current};
//     for (let option of current.options) {
//         const newOption = {
//             ...option,
//             nextOption:variantOptions[0]
//         }
//         newCurr = {
//             ...newCurr,
//             options:newOption
//         }
//     }
//     return newCurr;
// }
// const getListOfAllTheVariants = (variantOptions, startNode) => {

//     let current = startNode;

//     for (let i = 0; i < variantOptions.length; i++) {
//         variantOptions.splice(0,1);

//         const newOpt = stuffOption(current, variantOptions);
//         console.log(JSON.stringify(newOpt));

//         current = newOpt.options.nextOption;
//     }

// }

// getListOfAllTheVariants([...variantOptions], variantOptions[0]);

let variantList = "";
let variantContainer = [];

const generateVariants = (variants, variantList) => {
  if (!variants?.options) {
    return variantList;
  }

  variantList += variants.key;

  for (let i = 0; i < variants.options.length; i++) {
    const opt = variants.options[i];
    variantList += ":" + opt.key + ";";
    const varList = generateVariants(opt.nextOpt, variantList);

    if (varList) {
      variantContainer.push({ variant: varList, price: 0, stock: 0, imageUrl: 0 });
    }

    var spList = variantList.split(":");
    spList.pop();
    variantList = spList.join(":");
  }
};
for (let j = 0; j < variants.length; j++) {
  const element = variants[j];
  const res = generateVariants(element, variantList);
}
console.log(variantContainer);
