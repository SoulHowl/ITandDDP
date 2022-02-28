using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

#pragma warning disable CS8604 // Возможно, аргумент-ссылка, допускающий значение NULL.

namespace UdpClientApp
{
    class Program
    {
        
        static string remoteAddress; // хост для отправки данных
        static int remotePort; // порт для отправки данных
        static int localPort; // локальный порт для прослушивания входящих подключений

        static int number = 0;
        static List<bool> messagesOrder;
        static List<string> messages;

        static bool gotNum = false;
        static bool gotDate = false;
        static bool gotMes = false;

        static int timeDel = 3;
        static void Main(string[] args)
        {
            try
            {
                Console.Write("Введите порт для прослушивания: ");
                localPort = Int32.Parse(Console.ReadLine());
                Console.Write("Введите удаленный адрес для подключения: ");
                remoteAddress = Console.ReadLine();
                Console.Write("Введите порт для подключения: ");
                remotePort = Int32.Parse(Console.ReadLine());
                messages = new List<string>();
                messagesOrder = new List<bool>(); 

                Thread receiveThread = new Thread(new ThreadStart(ReceiveMessage));
                receiveThread.Start();
                Thread sendThread = new Thread(new ThreadStart(SendMessage));
                sendThread.Start();
                //SendMessage(); // отправляем сообщение
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
        private static void SendMessage()
        {
            UdpClient sender = new UdpClient();
            //UdpClient receiver = new UdpClient(localPort);
            try
            {
                while (true)
                {
                    //sender.Client.ReceiveTimeout = 3000;
                    string message = Console.ReadLine();
                    number++;
                    byte[] recieveData;
                    byte[] messageNumber = new byte[1];
                    messageNumber[0] =  Convert.ToByte(number);
                    byte[] timeOfRecievedMes;
                    timeOfRecievedMes = Encoding.Unicode.GetBytes(DateTime.Now.ToString());
                    byte[] data = Encoding.Unicode.GetBytes(message);


                    sender.Send(timeOfRecievedMes, timeOfRecievedMes.Length, remoteAddress, remotePort);
                    /*recieveData = receiver.Receive(ref remoteIp);
                    string answer = Encoding.Unicode.GetString(recieveData);
                    if (answer != "num accepted")
                    {
                        throw new ArgumentException("Seems like one of prev messages were lost");
                    }*/

                    sender.Send(messageNumber, messageNumber.Length, remoteAddress, remotePort);
                    /*recieveData = receiver.Receive(ref remoteIp);
                    if (answer != "date accepted")
                    {
                        throw new ArgumentException("Seems like something's gone wrong during sending");
                    }*/

                    sender.Send(data, data.Length, remoteAddress, remotePort);
                    /*recieveData = receiver.Receive(ref remoteIp);
                    if (answer != "mes accepted")
                    {
                        throw new ArgumentException("Error , message wasnt coreectly delivered");
                    }*/
                    var t1 = DateTime.Now; 
                    while (DateTime.Now.Ticks - t1.Ticks < 3000)
                    if (!(gotMes == gotDate && gotMes == gotNum && gotNum))
                    {
                            Console.WriteLine("your message wasnt sent due to timeout");
                            gotDate = false;
                            gotMes = false;
                            gotNum = false;
                    }
                }
            }
            catch (Exception ex)
            {
                number--;
                Console.WriteLine(ex.Message);
            }
            finally
            {
                sender.Close();
                //receiver.Close();
            }
        }

        private static void ReceiveMessage()
        {
            UdpClient receiver = new UdpClient(localPort);
            //UdpClient sender = new UdpClient(remotePort);
            IPEndPoint? remoteIp = null;
            try
            {


                while (true)
                {
                    //receiver.Client.ReceiveTimeout = 3000;
                    
                    byte[] acceptAndSend = Encoding.Unicode.GetBytes("num accepted");
                    byte[] data = receiver.Receive(ref remoteIp);
                    var num = BitConverter.ToInt32(data);
                    if (num > 0 && num < int.MaxValue - 1)
                    {
                        gotNum = true;
                    }
                    //sender.Send(acceptAndSend, data.Length, remoteAddress, remotePort);
                    receiver.Client.ReceiveTimeout = 1000;
                    acceptAndSend = Encoding.Unicode.GetBytes("date accepted");
                    data = receiver.Receive(ref remoteIp);
                    

                    var date = Encoding.Unicode.GetString(data);
                    if (!(date is null))
                    {
                        gotDate = true;
                    }
                    //sender.Send(acceptAndSend, data.Length, remoteAddress, remotePort);

                    acceptAndSend = Encoding.Unicode.GetBytes("mes accepted");
                    data = receiver.Receive(ref remoteIp);
                    string message = Encoding.Unicode.GetString(data);
                    //sender.Send(acceptAndSend, data.Length, remoteAddress, remotePort);
                    if (message != null)
                    {
                        gotMes = true;
                    }
                    receiver.Client.ReceiveTimeout = default;
                    var finalMessage = string.Format("{0}:({1}) - {2} \t\t {3}\n", remoteAddress.ToString(),
                                                    num, message, DateTime.Now);
                    if (messagesOrder.Count == 0 || messagesOrder[num - 1] is true)
                    {
                        Console.WriteLine(finalMessage);
                    }                
                    messagesOrder.Add(true);
                    messages.Add(finalMessage);
                            
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                receiver.Close();
                //sender.Close();
            }
        }
    }
}