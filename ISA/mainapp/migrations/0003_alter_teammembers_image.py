# Generated by Django 4.2.2 on 2023-08-30 04:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0002_alter_teammembers_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teammembers',
            name='image',
            field=models.ImageField(upload_to='static/media/'),
        ),
    ]
