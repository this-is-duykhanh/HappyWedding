using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Database;

public partial class HappyWeddingContext : DbContext
{
    public HappyWeddingContext()
    {
    }

    public HappyWeddingContext(DbContextOptions<HappyWeddingContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Greeting> Greetings { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Greeting>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__greeting__3214EC07026FB862");

            entity.ToTable("greeting");

            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("smalldatetime");
            entity.Property(e => e.Image)
                .HasMaxLength(int.MaxValue)
                .IsUnicode(false);
            entity.Property(e => e.Message)
                .HasMaxLength(int.MaxValue)
                .IsUnicode(true);
            entity.Property(e => e.Sender)
                .HasMaxLength(100)
                .IsUnicode(true);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
