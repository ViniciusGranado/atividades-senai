# Generated by Django 3.2.9 on 2021-12-04 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='curso',
            name='categoria',
            field=models.CharField(default='', max_length=30),
        ),
    ]
