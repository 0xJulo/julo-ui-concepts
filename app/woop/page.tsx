"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

/* 

The main tabs component, Receive, Invest, NFTs

*/

function TabsComponent() {
  return (
    <Tabs defaultValue="receive" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="receive">Receive</TabsTrigger>
        <TabsTrigger value="invest">Invest</TabsTrigger>
        <TabsTrigger value="NFTs">NFTs</TabsTrigger>
      </TabsList>
      <TabsContent value="receive">
        <ReceiveModule />
      </TabsContent>
      <TabsContent value="invest">
        <InvestModule />
      </TabsContent>
      <TabsContent value="NFTs">
        <p>NFTs</p>
      </TabsContent>
    </Tabs>
  );
}

/* 

The select amount component at the top of the receive module

*/

function SelectAmount() {
    const [isUnique, setIsUnique] = useState(false);
  return (
    <Card className="p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <Input placeholder="Enter amount" disabled={isUnique} className="flex-2" />
          <Select>
            <SelectTrigger className="w-full mt-0 flex-1">
              <SelectValue placeholder="Select a currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Switch checked={isUnique} onCheckedChange={setIsUnique} />
          <Label>Any amount</Label>
        </div>
      </div>
    </Card>
  );
}

/* 

The dropdown component with props for different use cases

*/

interface DropdownProps {
  label: string;
  options: string[];
  placeholder: string;
  subtext?: string;
}

function Dropdown({ label, options, subtext, placeholder }: DropdownProps) {
  return (
    <div>
      <p>{label}</p>
      <Select>
        <SelectTrigger className="w-full mt-0">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {subtext && <p className="text-sm text-muted-foreground">{subtext}</p>}
    </div>
  );
}

/* 

Component for Woop message

*/

interface TransactionMessageProps {
  label: string;
  placeholder: string;
}

function TransactionMessage({ label, placeholder }: TransactionMessageProps) {
  return (
    <div>
      <p>{label}</p>
      <Input placeholder={placeholder} />
    </div>
  );
}

/* 

The receive module in its entirety

*/

function ReceiveModule() {
  return (
    <div className="flex flex-col gap-6">
      <SelectAmount />
      <Tabs defaultValue="wallet" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="wallet">Crypto Wallet</TabsTrigger>
          <TabsTrigger value="bank">Bank Account</TabsTrigger>
        </TabsList>
        <TabsContent value="wallet">
          <Dropdown
            label="Select wallet"
            options={[
              "0xfe2...14b (someone.eth)",
              "0xe4b...2cd",
              "0x123...456",
            ]}
            placeholder="Select a wallet"
          />
        </TabsContent>
        <TabsContent value="bank">
          <Dropdown
            label="Send to"
            options={["USD", "EUR"]}
            subtext="Your associated EVM wallet is: 0xfe2...14b"
            placeholder="Select a bank account"
          />
        </TabsContent>
      </Tabs>
      <TransactionMessage label="Message" placeholder="Pizza yesterday" />
    </div>
  );
}

/* 

The invest module in its entirety

*/

function InvestModule() {
  return (
    <div>
      <p>
        Invest your funds across different DeFi protocols depending on your
        preferences. For examples, Ethereum staking or stablecoin yield
        generation.
      </p>
    </div>
  );
}

/* 

The NFT module in its entirety

*/

function NFTModule() {}

/* 

The main Woop Widget component

*/

function WoopWidget() {
  return (
    <Card className="w-full p-6">
      <div className="flex justify-between">
        <Image
          src="/woop-logo.svg"
          alt="Woop Logo"
          width={180}
          height={38}
          priority
          className="h-8"
        />
        <X className="h-6 w-6" />
      </div>
      <TabsComponent />
    </Card>
  );
}

export default function WoopPage() {
  return (
    <div className="flex h-screen flex-col items-center mt-24 gap-4 w-full max-w-lg mx-auto">
      <WoopWidget />
    </div>
  );
}
