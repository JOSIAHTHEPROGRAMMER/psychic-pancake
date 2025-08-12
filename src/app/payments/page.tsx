import { Payment,columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
  id: "728ed521",
  amount: 134_000_000,
  status: "pending",
  username: "Larry Page",
  email: "larry.page@alphabet.com",
},
{
  id: "728ed522",
  amount: 124_000_000,
  status: "success",
  username: "Bill Gates",
  email: "bill.gates@gatesfoundation.org",
},
{
  id: "728ed523",
  amount: 2_167_000_000,
  status: "success",
  username: "Richard Branson",
  email: "richard@virgin.com",
},
{
  id: "728ed524",
  amount: 156_000_000,
  status: "failed",
  username: "Barack Obama",
  email: "barack.obama@obama.org",
},
{
  id: "728ed525",
  amount: 5_145_000_000,
  status: "success",
  username: "Bernard Arnault",
  email: "bernard.arnault@lvmh.com",
},
{
  id: "728ed526",
  amount: 189_000_000,
  status: "pending",
  username: "Tim Cook",
  email: "tim.cook@apple.com",
},
{
  id: "728ed527",
  amount: 8_178_000_000,
  status: "success",
  username: "Jeff Bezos",
  email: "jeff@blueorigin.com",
},
{
  id: "728ed528",
  amount: 7_190_000_000,
  status: "success",
  username: "Mark Zuckerberg",
  email: "mark@meta.com",
},
{
  id: "728ed529",
  amount: 134_000_000,
  status: "failed",
  username: "Vladimir Putin",
  email: "putin@gov.ru",
},
{
  id: "728ed52a",
  amount: 543_000_000,
  status: "success",
  username: "Xi Jinping",
  email: "xi.jinping@gov.cn",
},
{
  id: "728ed52b",
  amount: 234_000_000,
  status: "pending",
  username: "Justin Trudeau",
  email: "justin.trudeau@parl.gc.ca",
},
{
  id: "728ed52c",
  amount: 345_000_000,
  status: "success",
  username: "Emmanuel Macron",
  email: "emmanuel.macron@elysee.fr",
},
{
  id: "728ed52d",
  amount: 335_000_000,
  status: "failed",
  username: "Kim Jong-un",
  email: "kimjongun@gov.kp",
},
{
  id: "728ed52e",
  amount: 664_000_000,
  status: "pending",
  username: "Narendra Modi",
  email: "narendra.modi@gov.in",
},
{
  id: "728ed52f",
  amount: 332_000_000,
  status: "success",
  username: "Rishi Sunak",
  email: "rishi.sunak@parliament.uk",
},
{
  id: "728ed52g",
  amount: 2_413_000_000,
  status: "failed",
  username: "Mohammed bin Salman",
  email: "mbs@royal.gov.sa",
},
{
  id: "728ed52h",
  amount: 345_000_000,
  status: "pending",
  username: "Angela Merkel",
  email: "angela.merkel@germany.de",
},
{
  id: "728ed52i",
  amount: 754_000_000,
  status: "success",
  username: "Volodymyr Zelenskyy",
  email: "zelenskyy@president.gov.ua",
},
{
  id: "728ed52j",
  amount: 643_000_000,
  status: "failed",
  username: "Recep Tayyip Erdoğan",
  email: "erdogan@gov.tr",
},
{
  id: "728ed52k",
  amount: 543_000_000,
  status: "pending",
  username: "Benjamin Netanyahu",
  email: "netanyahu@gov.il",
},
{
  id: "728ed52l",
  amount: 324_000_000,
  status: "success",
  username: "Sundar Pichai",
  email: "sundar@google.com",
},
{
  id: "728ed52m",
  amount: 123_000_000,
  status: "pending",
  username: "Gwynne Shotwell",
  email: "gwynne@spacex.com",
},
{
  id: "728ed52n",
  amount: 422_000_000,
  status: "failed",
  username: "Donald Trump",
  email: "donald.trump@trumporg.com",
},
{
  id: "728ed52o",
  amount: 1_712_000_000,
  status: "success",
  username: "Kanye West",
  email: "kanye@yeezy.com",
},
{
  id: "728ed52p",
  amount: 360_000_000,
  status: "success",
  username: "Joe Rogan",
  email: "joe@spotify.com",
},
{
  id: "728ed52q",
  amount: 454_000_000,
  status: "pending",
  username: "Sergey Brin",
  email: "sergey.brin@alphabet.com",
},
{
  id: "728ed52r",
  amount: 5_382_000_000,
  status: "success",
  username: "Warren Buffett",
  email: "warren.buffett@berkshirehathaway.com",
},
{
  id: "728ed52s",
  amount: 328_000_000,
  status: "failed",
  username: "Jair Bolsonaro",
  email: "jair.bolsonaro@gov.br",
},
{
  id: "728ed52t",
  amount: 250_000_000,
  status: "success",
  username: "Jack Dorsey",
  email: "jack@block.xyz",
},
{
  id: "728ed52u",
  amount: 658_000_000,
  status: "success",
  username: "Reed Hastings",
  email: "reed@netflix.com",
},
{
  id: "728ed52v",
  amount: 1_691_000_000,
  status: "success",
  username: "Sheryl Sandberg",
  email: "sheryl@meta.com",
},
{
  id: "728ed52w",
  amount: 2_969_000_000,
  status: "success",
  username: "Oprah Winfrey",
  email: "oprah@owntv.com",
},
{
  id: "728ed52x",
  amount: 7_617_000_000,
  status: "failed",
  username: "SkyNet",
  email: "elon@tesla.com",
},
{
  id: "728ed52y",
  amount: 173_000_000,
  status: "success",
  username: "Yoshihide Suga",
  email: "yoshihide.suga@gov.jp",
},
{
  id: "728ed52z",
  amount: 843_000_000,
  status: "success",
  username: "Anthony Albanese",
  email: "anthony.albanese@gov.au",
},
{
  id: "728ed521f",
  amount: 3_914_000_000,
  status: "pending",
  username: "Sam Altman",
  email: "sam@openai.com",
},

  ];
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  );
};

export default PaymentsPage;