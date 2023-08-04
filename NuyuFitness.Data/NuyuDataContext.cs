using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NuyuFitness.Data
{
    public class NuyuDataContext : DbContext
    {
        private readonly string _connectionString;

        public NuyuDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Inquiry> Inquiries { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
