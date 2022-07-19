import { FormState } from './App'

const dividendTax = (x: number) => (x / 95) * 5
const input = (val: string | number) => `<input value="${val}"/>`

const generate = function ({ fullName, address, personalNumber, transactions }: FormState): string {
  const allDivident = transactions.reduce((acc, x) => acc + x.amount, 0)
  const allDividentTax = dividendTax(allDivident)
  const allDividentPlusTaxSum = allDivident + allDividentTax
  const transactionOverviewStr = transactions
    .map(({ amount, date }) =>
      `
1. ${date} - ${amount + dividendTax(amount)} ლარიდან, ${amount} არის დივიდენდი, ხოლო ${dividendTax(
        amount,
      )} გადასახადი.
`.trim(),
    )
    .join('\n')
  const transactionsDeclarationStepsStr = transactions
    .map(({ amount, date }) =>
      `
1. ველში **განაცემის მიმღების საიდენტ. ნომერი** ჩაწერე ${input(personalNumber)}
1. ველში **სახელი** ჩაწერე ${input(fullName.split(' ')[0])}
1. ველში **გვარი** ჩაწერე ${input(fullName.split(' ')[1])}
1. ველში **მისამართი** ჩაწერე **${input(address)}**
1. ველში **პირის რეზიდენტობა (ქვეყანა)** ჩაწერე **${input('საქართველო')}**
1. ველში **შემოსავლის მიმღებ პირთა კატეგორია** აირჩიე **${input(1.4)}: სხვა ფიზიკური პირები**
1. ველში **განაცემის სახე** აირჩიე **${input('დივიდენდი')}**
1. ველში **განაცემის თანხა(ლარი)** ჩაწერე **${input(amount + dividendTax(amount))}**
1. ველში **შეღავათის ოდენობა** ჩაწერე **${input(0)}**
1. ველში **გაცემის თარიღი** შეიყვანე თარიღი **${input(date)}**
1. ველში **წყაროსთან დასაკავებელი გადასახადის განაკვეთი** აირჩიე **${input(5)}**
1. ველში **დაკავებული გადასახადი (ლარი)** ჩაწერე **${input(allDividentTax)}**
1. დააჭირე ღილასკს დამატება, იკონით **+**
`.trim(),
    )
    .join('\n')

  return `


##### მიმოხილვა
ტრანზაქციები რომლის დეკლარირებასაც ვახდენთ:

${transactionOverviewStr}

---

##### დეკლარაციის შევსება
1. გადადი გვერდზე [eservices.rs.ge](https://eservices.rs.ge/) და გაიარე ავტორიზებას
1. გადადი გვერდზე __დეკლარაციები__

---

##### მოგება
1. გადადი გვერდზე **ყოველთვიური > მოგების გადასახადი**
1. დაკლიკე ღილაკზე **ახალი დეკლარაცია**
1. ველში **ეკონომიკური საქმიანობის (NACE) კოდი სრულად** შეიყვანე **${input(
    62020,
  )} (საკონსულტაციო საქმიანობები კომპიუტერული ტექნოლოგიების დარგში)** (მხოლოდ რიცხვის აკრეფა საკმარისია)
1. **რეზიდენტი საწარმო** მონიშული დატოვე
1. დააკლიკე დამატების ღილაკს, იკონით **+**
1. ზემოთ დააჭირე ღილაკს **2** რათა გადახვიდე მეორე გვერდზე
1. ველში **16.1 განაწილებული დივიდენდი, მათ შორის** ჩაწერე **${input(allDividentPlusTaxSum)}**
1. ველში **22. მოგების გადასახადისგან გათავისუფლებული მოგების განაწილება, გაწეული ხარჯი, განხორციელებული განაცემი** ჩაწერე **${input(
    allDividentPlusTaxSum,
  )}**
1. დასქროლე გვერდის ბოლოშ და დააჭირე ღილაკს **შენახვა**
1. ასქროლე სულ ზემოთ და დააჭირე გათიშვის ღილაკს იკონით **x**

---

##### საშემოსავლო
1. გადავდივართ გვერდზე **ყოველთვიური > საშემოსავლო (გადახდის წყაროსთან დაკავებული გადასახადი)**
1. დაკლიკე ღილაკზე **ახალი დეკლარაცია**
1. **გადამხდელის ტიპი** აირჩიე **სხვა**
1. ველში **ეკონომიკური საქმიანობის (NACE) კოდი სრულად** შეიყვანე **${input(
    62020,
  )} (საკონსულტაციო საქმიანობები კომპიუტერული ტექნოლოგიების დარგში)** (მხოლოდ რიცხვის აკრეფა საკმარისია)
1. დააკლიკე დამატების ღილაკს, იკონით **+**
1. ზემოთ დააჭირე ღილაკს **2** რათა გადახვიდე მეორე გვერდზე
${transactionsDeclarationStepsStr}
1. დასქროლე გვერდის ბოლოში და დააჭირე ღილაკს **შენახვა**
1. ასქროლე სულ ზემოთ და დააჭირე გათიშვის ღილაკს იკონით **x**

---

#####  განაცემთა ინფორმაცია
> აღარ ივსება *01/01/2020*-დან.

---

##### დეკლარაციების წარდგენა
1. გადავდივარ გვერდზე **სტატისტიკა > გადასაგზავნი დეკლარაციები**
1. შედიხარ ყველა დელკარაციაში
1. აკლიკავ **შემდეგს** მანამ სანამ არ გამოჩნდება ღილაკი **გადაგზავნა**
1. აკლიკავ ღილაკს **გადაგზავნა**`
}

export default generate
