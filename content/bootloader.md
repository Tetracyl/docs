---
layout: article
title: Repair the Boot-loader
description: >
   How to repair and reinstall the boot-loader.
keywords:
  - Support
  - Grub
  - systemd-boot
  - Bootloader
  - Refresh
  - Reinstall
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
section: software-troubleshooting
tableOfContents: true
---

Systemd-boot is the boot-loader for Pop!_OS 18.04 and above while GRUB is the boot-loader for Ubuntu and Pop!_OS when installed in Legacy BIOS mode. A boot-loader takes care of getting the operating system started up. It is also responsible for allowing the user to select between multiple operating systems at boot. Sometimes, GRUB or systemd-boot can break, and it may not let you boot into your computer to fix the problem.

### Important Note

If you need to configure grub-pc (for example, after an update), installing grub to all devices will break GRUB. You will need to install to `/dev/sda` _not_ `/dev/sda1`.

On a fresh install of Pop!_OS 18.04, <u>systemd-boot</u> is used rather than the <u>GRUB</u> boot-loader, and the following instructions do not apply please refer to the <u>systemd-boot</u> section on this page.

### Create Live Disk

Please see our instructions for making a live disk of Pop!_OS [here](/articles/live-disk/).

### Reinstall GRUB Boot-loader

Once you have the disk made, reboot your system. You'll need to tell the computer to boot from the Live Disk. When you see the System76 logo on the screen:

Laptops  | Desktops
-------- | --------
Hold <kbd>F7</kbd> or <kbd>F1</kbd> | Hold <kbd>F8</kbd> or <kbd>F10</kbd> or <kbd>F12</kbd>

Once the desktop is shown, connect to the Internet.  Next, open a terminal (search <u>Terminal</u> after pressing the Super Key) and run the following command:

```bash
sudo parted -ls
```

And then look for the name of your main hard drive. It could be `/dev/sda` or `/dev/nvme0n1`, depending on if you have a standard SATA drive, or an NVMe drive, respectively. If you have multiple drives, look at the sizes of the partitions and for the `linux-swap` partition to help identify the main OS drive. Here are some OS partition layout examples:

Ubuntu 20.04 LTS

```
      Number  Start   End     Size    File system     Name      Flags
       1      2097kB  524MB   522MB   fat32                     boot, esp
       2      524MB   496GB   491GB   ext4            root
       3      496GB   500GB   4295MB  linux-swap(v1)            swap
```

Pop!_OS 20.04 LTS

```
      Number  Start   End     Size    File system     Name      Flags
       1      2097kB  524MB   522MB   fat32                     boot, esp
       2      524MB   4819MB  4295MB  fat32           recovery  msftdata
       3      4819MB  496GB   491GB   ext4            root
       4      496GB   500GB   4295MB  linux-swap(v1)            swap
```

---

## GRUB

### EFI Boot

Most computers sold after 2014 use UEFI mode.  If `boot, esp` is listed under `flags`, the system is installed in UEFI mode. You can also use this command to see if the OS is installed in UEFI mode:

```bash
[ -d /sys/firmware/efi ] && echo "Installed in UEFI mode" || echo "Installed in Legacy mode"
```

Run these commands based on what type of disk you have:

| NVMe Drives                                  | SATA Drives                            |
| :------------------------------------------- | :------------------------------------- |
| ```sudo mount /dev/nvme0n1p2 /mnt```         | ```sudo mount /dev/sda2 /mnt```        |
|```sudo mount /dev/nvme0n1p1 /mnt/boot/efi``` |```sudo mount /dev/sda1 /mnt/boot/efi```|

```bash
for i in dev dev/pts proc sys run; do sudo mount -B /$i /mnt/$i; done
sudo cp -n /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall grub-efi-amd64 linux-generic linux-headers-generic
update-initramfs -c -k all
update-grub
```

---

### Legacy BIOS Boot

If `bios_grub` is listed under `flags`, the system is installed in BIOS mode. You can also use this command to see if the OS is installed in BIOS mode:

```bash
[ -d /sys/firmware/efi ] && echo "Installed in UEFI mode" || echo "Installed in Legacy mode"
```

Run these commands based on what type of disk you have:

| NVMe Drive                           | SATA Drive                      |
| :----------------------------------- | :------------------------------ |
| ```sudo mount /dev/nvme0n1p2 /mnt``` | ```sudo mount /dev/sda2 /mnt``` |

```bash
for i in dev dev/pts proc sys run; do sudo mount -B /$i /mnt/$i; done
sudo cp -n /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall grub-efi-amd64 linux-generic linux-headers-generic
update-initramfs -c -k all
sudo update-grub
```

## systemd-boot

### EFI Boot

Most computers sold after 2014 use UEFI mode.  If `boot, esp` is listed under `flags`, the system is installed in UEFI mode. You can also use this command to verify that your OS is installed in UEFI mode:

```bash
[ -d /sys/firmware/efi ] && echo "Installed in UEFI mode" || echo "Installed in Legacy mode"
```

The expected output is:

```bash
support@pop-os:~$ [ -d /sys/firmware/efi ] && echo "Installed in UEFI mode" || echo "Installed in Legacy mode"
Installed in UEFI mode
support@pop-os:~$
```

Run these commands based on what type of disk you have:

| NVMe Drive                                    | SATA Drive                              |
| :-------------------------------------------- | :-------------------------------------- |
| ```sudo mount /dev/nvme0n1p3 /mnt```          | ```sudo mount /dev/sda3 /mnt```         |
| ```sudo mount /dev/nvme0n1p1 /mnt/boot/efi``` | ```sudo mount /dev/sda1 /mnt/boot/efi```|

```bash
for i in dev dev/pts proc sys run; do sudo mount -B /$i /mnt/$i; done
sudo cp -n /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
apt install --reinstall linux-image-generic linux-headers-generic
update-initramfs -c -k all
exit
sudo bootctl --path=/mnt/boot/efi install
```

---

### Encrypted Disk

To get access to an encrypted disk, these additional commands need run to unlock the disk.  Please use the `lsblk` command described above to determine the correct drive and partition.

| NVMe Drive                                              | SATA Drive                                         |
| :------------------------------------------------------ | :------------------------------------------------- |
| ```sudo cryptsetup luksOpen /dev/nvme0n1p3 cryptdata``` | ```sudo cryptsetup luksOpen /dev/sda3 cryptdata``` |

```bash
sudo lvscan
sudo vgchange -ay
```

And take note as to what the volume group is called.  Substitute the correct info into this next command.  Make sure that `-root` is on the end:

```bash
sudo mount /dev/mapper/data-root /mnt
```

And now the existing hard drive can be accessed by going to the `/mnt` folder.  To use the <u>Files</u> program, go to '+ Other Locations' -> 'Computer' and then click on the `/mnt` folder.

### Chroot

<u>chroot</u> is the way to run commands as if the existing operating system had been booted.  Once these commands are run, then package manager (<u>apt</u>) and other system level commands can be run.

The EFI partition is usually around 512MB so that would be the partition that we replace in the next command. The Recovery Partition is around 4GB as well.

| NVMe Drive                                   | SATA Drive                               |
| :------------------------------------------- | :--------------------------------------- |
|```sudo mount /dev/nvme0n1p1 /mnt/boot/efi``` | ```sudo mount /dev/sda1 /mnt/boot/efi``` |

```bash
for i in dev dev/pts proc sys run; do sudo mount -B /$i /mnt/$i; done
sudo chroot /mnt
```

You now have root administrator access to your installed OS. If you are trying to either fix or undo changes that you made to the system, you now have the access to do so. Once you are done, and to exit from the <u>chroot</u> and reboot the computer, run these commands:

```bash
exit
reboot
```

---

As your system reboots, remove the disk when prompted. The computer should now boot normally.

## Troubleshooting

### chroot

If the `chroot` command returns with the error: `chroot: cannot run command '/bin/bash': Exec format error`, this probably indicates that the Install DVD/CD or USB is not compatible with that of the installed system.

For example, the error is most frequently seen when trying to `chroot` to a 64-bit system (amd64) from a 32-bit Install CD (x86).

The solution is to use an Install CD which is using the same architecture as the installed system (32-bit Install CD for 32-bit targets / 64-bit Install CD for 64-bit targets).

Make sure to use `/dev/sda1` (the partition) and `/dev/sda` (the disk) or `/dev/nvme0n1p1` (the partition) and `/dev/nvme0n1` (the disk) correctly in the commands above.

### systemd-boot fails to start the OS

If the system boots into a `BusyBox` environment, try `exit` to show potential failure causes.

A message like `ALERT! UUID:xxx does not exist. Dropping to a shell!` indicates an issue with the loader entry in `systemd-boot`.

Ensure that `/boot/efi/loader/entries/Pop_OS-current.conf` contains the correct UUID for the disk. For an encrypted setup, the line `options root=UUID=xxx ro quiet loglevel=0 systemd.show_status=false splash` should match the UUID reported by `lsblk -f` for the `data-root` partition on a standard installation with LUKS.
