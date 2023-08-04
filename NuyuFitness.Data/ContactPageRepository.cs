using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NuyuFitness.Data
{
    public class ContactPageRepository
    {
        private string _connectionString;

        public ContactPageRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(Inquiry inquiry)
        {
            using var context = new NuyuDataContext(_connectionString);
            context.Inquiries.Add(inquiry);
            context.SaveChanges();
        }
    }
}
